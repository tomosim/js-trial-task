import axios from "axios"
import { groupUsers } from "./utils";

const getUsers = (userCount, cursor = null) => {
    return axios.get("/api/search", { params: { length: userCount, cursor: cursor } })
        .then(res => {

            let query = "?"
            const usersInfo = res.data.items.map(user => {
                query = query + `ids=${user.id}&`
                return user
            });
            const after = res.data.cursors.after

            return Promise.all([usersInfo, after,  axios.get("/api/profiles" + query)])
        })
        .then(([usersInfo, after, res]) => {
            const combinedData = groupUsers(usersInfo, res.data)

            return {users: combinedData, after: after}
        })
}

export { getUsers }
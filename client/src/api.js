import axios from "axios"
import { groupUsers } from "./utils";

const getUsers = (userCount) => {
    return axios.get("/api/search", { params: { length: userCount } })
        .then(res => {

            let query = "?"
            const usersInfo = res.data.items.map(user => {
                query = query + `ids=${user.id}&`
                return user
            });

            return Promise.all([usersInfo, axios.get("/api/profiles" + query)])
        })
        .then(([usersInfo, res]) => {
            const combinedData = groupUsers(usersInfo, res.data)

            return combinedData
        })
}

export { getUsers }
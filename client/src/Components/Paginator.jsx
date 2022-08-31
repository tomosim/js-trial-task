import React from "react";
import { getUsers } from "../api";

const Paginator = ({setUsers, after, setAfter, userCount, setError}) =>{

    const fetchNextUsers = () => {
        getUsers(userCount, after)
        .then(({users, after}) => {
            setAfter(after)
            setUsers(users)
        })
        .catch(err => {
            console.log(err)
            setError({ status: err.response.status, msg: err.response.statusText })
        })
    }

    return <button onClick={fetchNextUsers}>Next</button>
}

export default Paginator
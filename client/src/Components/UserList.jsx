import React, { useState, useEffect } from "react";
import User from "./User"
import { getUsers } from "../api.js"
import Paginator from "./Paginator";

const UserList = ({ userCount }) => {
    const [after, setAfter] = useState(null)
    const [users, setUsers] = useState([])
    const [error, setError] = useState({})

    useEffect(() => {
        getUsers(userCount, null)
            .then(({users, after}) => {
                setAfter(after)
                setUsers(users)
            })
            .catch(err => {
                console.log(err)
                setError({ status: err.response.status, msg: err.response.statusText })
            })
    }, [userCount])

    return (

        error.status !== undefined ? <span>
            <h1>Error: {error.status}</h1>
            <h2>{error.msg}</h2>
        </span>
            :
            <>
                <ul className="user-list">
                    {users.map(user => {
                        return <User key={user.id} user={user} />
                    })}
                </ul>
                <Paginator setUsers={setUsers} after={after} setAfter={setAfter} userCount={userCount}/>
            </>

    );
}

export default UserList;
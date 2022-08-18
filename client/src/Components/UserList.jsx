import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "./User"
import { getUsers } from "../api.js"

const UserList = ({ userCount }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers(userCount)
            .then(users => {
                setUsers(users)
            })
            .catch(err => console.log("ERROR: ", err)) //todo: error state
    }, [userCount])

    return (
        <ul className="user-list">
            {users.map(user => {
                return <User key={user.id} user={user} />
            })}
        </ul>
    );
}

export default UserList;
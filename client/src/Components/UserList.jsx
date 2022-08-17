import axios from "axios";
import React, { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("/api/search", { params: { length: 1 } })
            .then(res => {
                setUsers(res.data.items)
            })
            .catch(err => console.log("ERROR: ", err))
    }, [])

    return (
        <ul>
            {users.map(user => {
                return <li key={user.id}>
                    {user.name}
                </li>
            })}
        </ul>
    );
}

export default UserList;
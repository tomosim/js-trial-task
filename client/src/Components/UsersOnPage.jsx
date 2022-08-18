import { useEffect } from "react";
import { useState } from "react";

const UsersOnPage = ({ setUserCount }) => {
    const [value, setValue] = useState(10)

    const handleChange = e => {
        setValue(e.target.value)
    }

    useEffect(() => {
        setUserCount(value)
    }, [value, setUserCount])

    return <form id="num-users">
        <label htmlFor="nums">Users on page:</label>
        <select name="nums" value={value} onChange={handleChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
        </select>
    </form>
}

export default UsersOnPage;
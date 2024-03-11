import './color.css'
import { useEffect, useState } from "react"
import UsersDataLoad from "../usersData";

export default function Users() {
    const [users, setUsersValue] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsersValue(data))
    }, [])

    return (
        <div className='users'>
            <h1>My first api react</h1>
            <h2>Users: {users.length}</h2>
            {
                users.map(user=> <UsersDataLoad props={user}></UsersDataLoad>)
            }
        </div>
    )
}
import React, { useEffect, useState } from 'react'
const Fetch = () => {
    const [users, setUsers] = useState([]);
    const getUsuario = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    }
    useEffect(()=>{
        getUsuario();
    }, [])

    const htmlUsers = Array.isArray(users) ? users.map(user => (
        <div key={user.id}>
        <h4>{user.name}</h4>
        <h4>{user.email}</h4>
        <h4>{user.username}</h4>
        </div>
    )): null;
    return(
        <div style={{ textAlign: "center" }}>
        <h1> Fetch API</h1>
        <h4> {htmlUsers} </h4>
        </div>
    )
}
export default Fetch

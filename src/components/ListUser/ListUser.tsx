import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ListUserProp } from "../../App";
import { getUsers, deleteUser } from "../../features/Users/Users";
import { CardUser } from "../CardUser/CardUser";
import './ListUser.css'
import { UpdateUser } from "../UpdateUser/UpdateUser";

export function ListUser(props: any) {
    const dispatch = useDispatch()
    const [users, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://fakestoreapi.com/users')
                .then(res => res.json())
                .catch(e => console.error(e))
            setUser(data)
        }
        fetchData()
    }, []);

    return (
        <div className='add-user-container'>
            <div className="add-user-card">
                <button
                    onClick={() => { dispatch(getUsers({ data: users })) }}
                    className="button"
                >
                    Get users
                </button>
                {
                    props.users.map((user: any) => {
                        return <CardUser users={users} user={user}/>
                    })
                }
            </div>
        </div>
    )
}
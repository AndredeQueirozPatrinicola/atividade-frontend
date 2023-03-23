import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ListUserProp } from "../../App";
import { getUsers, deleteUser } from "../../features/Users/Users";
import './ListUser.css'

export function ListUser(props: ListUserProp) {
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
                    props.users.map((user) => {
                        return (
                            <div key={props.users.indexOf(user)} className="card-user">
                                <div>
                                    <h6>Personal Infos</h6>
                                    <p>Name: {`${user.name.firstname} ${user.name.lastname}`}</p>
                                    <p>Username: {user.username}</p>
                                    <p>E-mail: {user.email}</p>
                                    <p>Phone : {user.phone}</p>
                                </div>
                                <hr/>
                                <div>
                                    <h6>Address</h6>
                                    <p>Address: {`${user.address.street}, ${user.address.number}`}</p>
                                    <p>City: {user.address.city}</p>
                                    <p>ZipCode: {user.address.zipcode}</p>
                                </div>
                                <div className="card-user-options">
                                    <button
                                        className="button"
                                    >   
                                        Update
                                    </button>
                                    <button
                                        className="button"
                                        onClick={() => dispatch(deleteUser({data:props.users.indexOf(user)}))}
                                    >
                                        Delete
                                    </button>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
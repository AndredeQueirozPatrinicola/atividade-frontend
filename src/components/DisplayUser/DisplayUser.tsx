import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ListUserProp } from "../../App";
import { getUsers, deleteUser } from "../../features/Users/Users";
// import './ListUser.css'

export function DisplayUser(props: any) {
    const dispatch = useDispatch()

    const handleClick = () => {
        props.handleUpdate();
    };

    return (
        <>
            <div key={props.users.indexOf(props.user)}>
                <h6>Personal Infos</h6>
                <p>Name: {`${props.user.name.firstname} ${props.user.name.lastname}`}</p>
                <p>Username: {props.user.username}</p>
                <p>E-mail: {props.user.email}</p>
                <p>Phone : {props.user.phone}</p>
            </div>
            <hr />
            <div>
                <h6>Address</h6>
                <p>Address: {`${props.user.address.street}, ${props.user.address.number}`}</p>
                <p>City: {props.user.address.city}</p>
                <p>ZipCode: {props.user.address.zipcode}</p>
            </div>
            <div className="card-user-options">

                <button
                    className="button"
                    onClick={handleClick}
                    id="update-user"
                >
                    Update
                </button>
                <button
                    className="button"
                    onClick={() =>
                        dispatch(deleteUser({ data: props.users.indexOf(props.user) }))
                    }
                >
                    Delete
                </button>
            </div>
        </>
    )
}

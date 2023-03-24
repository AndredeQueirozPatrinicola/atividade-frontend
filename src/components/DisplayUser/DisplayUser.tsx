import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ListUserProp } from "../../App";
import { getUsers, deleteUser } from "../../features/Users/Users";
// import './ListUser.css'

export function DisplayUser(props: any) {
    const dispatch = useDispatch()

    return (
        <>
            <div>
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
        </>
    )
}

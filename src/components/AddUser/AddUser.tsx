import React, { useState, useEffect } from "react";
import './AddUser.css'
import { ListUserProp } from "../../App";
import { addUser } from "../../features/Users/Users";
import { useDispatch } from "react-redux";



export function AddUser(prop: ListUserProp) {

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")

    const name = {
        firstname: firstName,
        lastname: lastName
    }
    const fullAdress = {
        city:city,
        street:address,
        number:"",
        zipcode:zipcode,
        geolocation : {
            lat: "",
            long: ""
        },
        phone: phone
    }

    return (
        <div className='add-user-container'>
            <div className="add-user-card">
                <div className="card-user">
                    <div>
                        <h6>Personal Infos</h6>
                        <p>First name: <input
                            type="text"
                            onChange={(event) => { setFirstName(event.target.value) }}
                        ></input></p>
                        <p>Last name: <input
                            type="text"
                            onChange={(event) => { setLastName(event.target.value) }}
                        ></input></p>
                        <p>E-mail: <input
                            type="text"
                            onChange={(event) => { setEmail(event.target.value) }}
                        ></input></p>
                        <p>Username: <input
                            type="text"
                            onChange={(event) => { setUsername(event.target.value) }}
                        ></input></p>
                        <p>Password: <input
                            type="password"
                            onChange={(event) => { setPassword(event.target.value) }}
                        ></input></p>

                    </div>
                    <hr />
                    <div>
                        <h6>Address</h6>
                        <p>Phone: <input
                            type="text"
                            onChange={(event) => { setPhone(event.target.value) }}
                        ></input></p>
                        <p>Addess: <input
                            type="text"
                            onChange={(event) => { setAddress(event.target.value) }}
                        ></input></p>
                        <p>City: <input
                            type="text"
                            onChange={(event) => { setCity(event.target.value) }}
                        ></input></p>
                        <p>Zip-code: <input
                            type="text"
                            onChange={(event) => { setZipcode(event.target.value) }}
                        ></input></p>
                    </div>
                    <div className="card-user-options">
                        <button
                            className="button"
                            id="addUser"
                            onClick={() => {
                                let data = {
                                    id: 0,
                                    name,
                                    email,
                                    username,
                                    password,
                                    phone,
                                    address: fullAdress,
                                }
                                dispatch(addUser({data}))}
                            }
                        >
                            Add
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}


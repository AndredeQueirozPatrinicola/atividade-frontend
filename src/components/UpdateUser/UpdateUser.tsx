import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/Users/Users";

export function UpdateUser(props: any) {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(props.user.name.firstname);
    const [lastName, setLastName] = useState(props.user.name.lastname);
    const [email, setEmail] = useState(props.user.email);
    const [username, setUsername] = useState(props.user.username);
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState(props.user.phone);
    const [address, setAddress] = useState(props.user.address.street);
    const [city, setCity] = useState(props.user.address.city);
    const [zipcode, setZipcode] = useState(props.user.address.zipcode);

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

    const handleClickSave = () => {
        let data = {
            id: 0,
            name,
            email,
            username,
            password,
            phone,
            address: fullAdress,
        }
        dispatch(updateUser({
            index:props.users.indexOf(props.user),
            data
        }))
        props.handleSave();
    };

    const handleClickCancel = () => {
        
        props.handleSave();
    };

    return (
        <>
            <div>
                <h6>Personal Infos</h6>
                <p>
                    First name:{" "}
                    <input
                        type="text"
                        value={firstName}
                        onChange={(event) => {
                            setFirstName(event.target.value);
                        }}
                    ></input>
                </p>
                <p>
                    Last name:{" "}
                    <input
                        type="text"
                        value={lastName}
                        onChange={(event) => {
                            setLastName(event.target.value);
                        }}
                    ></input>
                </p>
                <p>
                    E-mail:{" "}
                    <input
                        type="text"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    ></input>
                </p>
                <p>
                    Username:{" "}
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    ></input>
                </p>
                <p>
                    Password:{" "}
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    ></input>
                </p>
            </div>
            <hr />
            <div>
                <h6>Address</h6>
                <p>
                    Phone:{" "}
                    <input
                        type="text"
                        value={phone}
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }}
                    ></input>
                </p>
                <p>
                    Address:{" "}
                    <input
                        type="text"
                        value={address}
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }}
                    ></input>
                </p>
                <p>
                    City:{" "}
                    <input
                        type="text"
                        value={city}
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                    ></input>
                </p>
                <p>
                    Zip-code:{" "}
                    <input
                        type="text"
                        value={zipcode}
                        onChange={(event) => {
                            setZipcode(event.target.value);
                        }}
                    ></input>
                </p>
            </div>
            <div className="card-user-options">
                <button
                    className="button"
                    onClick={handleClickSave}   
                    id="save"
                >
                    Save
                </button>
                <button
                    className="button"
                    onClick={handleClickCancel}
                >
                    Cancel
                </button>
            </div>
        </>
    )
}
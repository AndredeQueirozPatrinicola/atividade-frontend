import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ListUserProp } from "../../App";
import { getUsers, deleteUser, updateUser } from "../../features/Users/Users";
import { UpdateUser } from "../UpdateUser/UpdateUser";
import { DisplayUser } from "../DisplayUser/DisplayUser";

export function CardUser(props: any) {
    const dispatch = useDispatch()
    const [editing, setEdit] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(props.user);
    const classDisplayUpdate = editing ? "card-user update-user" : "card-user"

    const handleChangeState = () => {
        setEdit(!editing);
    }

    return (
        <div key={props.user.id} className={classDisplayUpdate}>
            {
                editing ? (
                    <UpdateUser
                        user={updatedUser}
                        users={props.users}
                        handleSave={handleChangeState}
                        setUpdatedUser={setUpdatedUser}
                    />
                ) : (
                    <DisplayUser 
                        user={props.user}
                        users={props.users}
                        handleUpdate={handleChangeState}
                    />
                )
            }
        </div>
    )
}
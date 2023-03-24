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
    console.log(updatedUser)
    const classDisplayUpdate = editing ? "card-user update-user" : "card-user"

    const handleSave = () => {
        dispatch(updateUser(updatedUser));
        setEdit(false);
    }

    return (
        <div key={props.user.id} className={classDisplayUpdate}>
            {
                editing ? (
                    <UpdateUser
                        user={updatedUser}
                        setUpdatedUser={setUpdatedUser}
                    />
                ) : (
                    <DisplayUser user={props.user} />
                )
            }
            <div className="card-user-options">
                {
                    editing ? (
                        <>
                            <button
                                className="button"
                                onClick={() => {
                                    setUpdatedUser(updatedUser);
                                    handleSave()
                                }}
                                id="save"
                            >
                                Save
                            </button>
                            <button
                                className="button"
                                onClick={() => setEdit(false)}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="button"
                                onClick={() => setEdit(true)}
                                id="update-user"
                                type="submit"
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
                        </>
                    )
                }
            </div>
        </div>
    )
}
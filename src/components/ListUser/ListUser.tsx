import React from "react";
import { useDispatch } from "react-redux";
import { ListUserProp } from "../../App";
import { Data } from "../../FakeData";
import { getUsers } from "../../features/Users/Users";

export function ListUser(props: ListUserProp) {
    const dispatch = useDispatch()
    return (
        <div className='add-user-container'>
            <div className="add-user-card">
                <button onClick={() => {dispatch(getUsers({}))}}>Ola</button>
            {
                props.users.map((user: Data) => {
                    return (
                        <div key={user.id}>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <p>{user.password}</p>
                        </div>
                    )

                })
            }
            </div>
        </div>
    )
}
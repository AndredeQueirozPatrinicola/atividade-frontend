import { createSlice } from '@reduxjs/toolkit';
import produce from "immer";
import { FakeData } from '../../FakeData';

export interface UserInterface {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    }
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        }
    }
    phone: string;
}

export interface UsersState {
    value: UserInterface[];
}

const initialState: UsersState = {
    value: []
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            //
        },
        getUsers: (state, action) => {
            fetch('https://fakestoreapi.com/users')
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    return produce(state, (draftState) => {
                        draftState.value.push(json);
                    });
                })
        }
    }
});

export const { getUsers } = userSlice.actions

export default userSlice.reducer
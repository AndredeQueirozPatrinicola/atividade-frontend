import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state: object[], action) => {
            state.push(action.payload.data)
        },
        getUsers: (state: object[], action) =>{
            const users : object[]= action.payload.data
            users.forEach((data=>{
                state.push(data)
            }))
        },
        deleteUser: (state:object[], action) => {
            state.splice(action.payload.data, 1)
        },
        updateUser: (state : object[], action) => {
            state[action.payload.data.index] = action.payload.data.user;
        }
    }
});

export const { getUsers, deleteUser } = userSlice.actions
export default userSlice.reducer
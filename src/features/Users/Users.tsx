import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            //
        },
        getUsers: (state: object[], action) =>{
            const users : object[]= action.payload.data
            users.forEach((data=>{
                state.push(data)
            }))
        }
    }
});

export const { getUsers } = userSlice.actions
export default userSlice.reducer
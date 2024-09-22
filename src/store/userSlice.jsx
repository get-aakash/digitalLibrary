import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state, action){
            state = state.filter(item=>item.id !==action.payload)
        }
    }
})

export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer
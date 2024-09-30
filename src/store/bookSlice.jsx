import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    books:[]
}
const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        getBooksSuccess:(state, {payload})=>{
            if(!state.books.length && !payload.length){
                return
            }
            
            state.books = payload
        },
    }


})

export const {getBooksSuccess} = bookSlice.actions
export default bookSlice.reducer
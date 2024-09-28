import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    books:{}
}
const bookSlice = createSlice({
    name:book,
    initialState,
    reducers:{
        addBook(state,{payload}){
            state.books = payload
        }
    }


})

export const {addBook} = bookSlice.actions
export default bookSlice.reducer
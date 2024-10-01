import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    books:[],
    selectedBook: {}
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
        setSelectedBook: (state,{payload})=>{
            state.selectedBook = state.books.find(item=>item.id === payload)
        }
    }


})

export const {getBooksSuccess, setSelectedBook} = bookSlice.actions
export default bookSlice.reducer
import { addDoc, collection, getDocs, query } from "firebase/firestore"
import { db } from "../../services/firebase"
import { toast } from "react-toastify"
import { addBook } from "../../store/bookSlice"



export const getBookAction = ()=> async(dispatch)=>{
    try {
        let bks = []
        const q = query(collection(db, "books"))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            const { id } = doc
            const data = { ...doc.data(), id }
            bks.push(data)
        })
        dispatch(addBook(bks))
    } catch (error) {
        toast.error(error.message)
        
    }
}
export const addBookAction =(data)=> async(dispatch)=>{
    const docRef = await addDoc(collection(db, "books"), data)
    if(docRef.id){

        dispatch(getBookAction())&&toast.success("Book added successfully")
    }

}
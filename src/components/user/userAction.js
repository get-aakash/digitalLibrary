import { doc, getDoc } from "firebase/firestore"
import { addUser } from "../../store/userSlice"
import { toast } from "react-toastify"
import { db } from "../../services/firebase"


export const autoLogin = (uid) => async (dispatch) => {
    console.log(uid)
    try {
        const userRef = doc(db, 'users', uid)
        const docSnap = await getDoc(userRef)
        if (docSnap.exists()) {
            const dbUser = docSnap.data()
            console.log("docSnap:", docSnap.data())
            const userObj = {
                uid, ...dbUser
            }
            console.log(userObj)

            if (userObj.uid) {
                dispatch(addUser(userObj))
                toast.success("Your account has been created redirecting to dashboard!!")
                return
            }
        }
        toast.error("unable to login, Invalid details")
    } catch (error) {
        toast.error(error.message)
    }
}
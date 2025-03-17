import React, {useContext, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./pages/login/login"
import Chat from "./pages/chat/chat"
import ProfileUpdate from "./pages/profileupdate/profileupdate"
import { ToastContainer } from 'react-toastify';
import { onAuthStateChanged } from "firebase/auth"
import { autth } from "./config/firebase"
import { AppContext } from "./context/Appcontext"




const App =() => {

    const navigate = useNavigate();

    const {loadUserData} = useContext(AppContext)
       
    useEffect(()=>{
        onAuthStateChanged(autth,async (user) => {
            if(user){
                navigate('/')
                // await loadUserData(user.uid)
                
            }else{
                navigate('/')
            }
        })
    },[])
       
    return(
        <>
        <ToastContainer/>
<Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/chat" element={<Chat/>}/>
    <Route path="/profile" element={<ProfileUpdate/>}/>
</Routes>
        </>
    )
}
export default App;

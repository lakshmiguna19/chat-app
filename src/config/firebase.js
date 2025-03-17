


import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDNegaWpQaZAIp8nCC4G_lS0qIBm6YsMCk",
  authDomain: "chat-app-gs-1dc2b.firebaseapp.com",
  projectId: "chat-app-gs-1dc2b",
  storageBucket: "chat-app-gs-1dc2b.firebasestorage.app",
  messagingSenderId: "272250912772",
  appId: "1:272250912772:web:69cf3fac1fb4e14225b551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  autth = getAuth(app);
const db = getFirestore(app);

const signup = async(username,email,password)=>{
  try{
    const res = await createUserWithEmailAndPassword(autth,email,password);
    const user = res.user;
    await setDoc (doc(db,"user",user.uid),{
      id:user.uid,
      username:username.toLowerCase(),
      email,
      name:"",
      avatar:"",
      bio:"Hey! There i am using chat app",
      lastSeen:Date.now()

      
    })
    await setDoc(doc(db,"chats",user.uid),{
      chatData:[]
    })
  } catch (error){
    console.error(error)
    toast.error(error.code .split('/')[1].split('-').join(""));

  }
}
const login = async (email,password) =>{
  try{
    await signInWithEmailAndPassword(autth,email,password)
  } catch(error){
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(""));

  }

}
const logout = async () =>{ 
 
  try {
    await signOut(autth)
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(""));
  }
}

export {signup,login,logout,autth,db} 

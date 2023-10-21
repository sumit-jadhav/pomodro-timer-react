import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDfnDt-LVjzuEh1kIzdIZf1C5L2LXk8rtk",
    authDomain: "pomodro-timer-5a3c0.firebaseapp.com",
    projectId: "pomodro-timer-5a3c0",
    storageBucket: "pomodro-timer-5a3c0.appspot.com",
    messagingSenderId: "560679736411",
    appId: "1:560679736411:web:892705b1c0ba27a9041b7e",
    measurementId: "G-7GNN1CP139"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()


export const signOutUser = () => {

    signOut(auth).then(() => {

        // console.log(localStorage.getItem("name"))
        // console.log(localStorage.getItem("email", ""))
        console.log("sign out")
    }).catch((error) => {
        console.log(error)
    })
}

export const signInWithGoogle = () => {

    signInWithPopup(auth, provider).then((result) => {

        const name = result.user.displayName
        const email = result.user.email
        console.log(result)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)

    }).catch((error) => { console.log(error) })
}
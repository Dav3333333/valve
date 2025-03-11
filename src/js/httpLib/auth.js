import firebase from "firebase/compat/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithCredential } from "firebase/auth";


class AuthManager {
    constructor() {
        
    }

    async  #singIn(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(
                getAuth(firebase), 
                email, 
                password
            );
            console.log("user ", userCredential.user);
        } catch (error) {
            console.log("erreur ", error.message);
        }
    }
    
    
    async #signUp(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                getAuth(firebase), 
                email, 
                password
            );
            console.log("user ", userCredential.user);
        } catch (error) {
            console.log("erreur ", error.message);
        }
    }    
}

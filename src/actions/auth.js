import {firebase, googleAuthProvider} from '../firebase/firebase-Config';
import {types} from '../types/types';

export const startLoginEmailPassword = (email,password) =>{
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123,'Nathalyy'));
            
        }, 3500);

    } // siempre regresa un callback (se usa cuando es asincrona)
}

export const startGoogleLogin = () =>{
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid,user.displayName)

            )
        });


    }

}




export const login = (uid,displayName) => {
    return {
        type: types.login,
        payload : {
            uid,
            displayName
        }
    }
}
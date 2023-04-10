import {firebase, googleAuthProvider} from '../firebase/fireBaseConfig';

export const login = ()=>{return firebase.auth.signInWithPopup(googleAuthProvider)}
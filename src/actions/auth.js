import React from "react";
import { googleAuthProvider,firebase } from "../firebase/fireBaseConfig";

export const login = ()=> {
  
  return firebase.auth().signInWithPopup(googleAuthProvider);
}

export const logout = ()=> {

  return firebase.auth().signOut();
} 
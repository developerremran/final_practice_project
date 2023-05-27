/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../FireBase/Firebase.config';
import { useEffect } from 'react';
import { set } from 'react-hook-form';

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)


  const createUser=(email,password)=>{
    setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
  }

  const loggedUser=(email, password)=>{
     setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
  }
  const loggOut=()=>{
     setLoading(true)
    signOut(auth).then(() => {
      
    }).catch((error) => {
    });
  }

  const updateProfiled  =(name,photo)=>{
    updateProfile(auth.currentUser, {
      displayName: name, photoURL : photo
    })
  }


  const authInfo = {
      user,
      loading,
      createUser,
      loggedUser,
      loggOut,
      updateProfiled
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((auth), currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      return unsubscribe
    }
  }, [])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
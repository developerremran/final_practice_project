/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../FireBase/Firebase.config';
import { useEffect } from 'react';
import axios from 'axios';


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider();
  // google sign in 
  const googleNewUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loggedUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const loggOut = () => {
    setLoading(true)
    signOut(auth).then(() => {

    }).catch((error) => {
    });
  }



  const updateProfiled = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged((auth), currentUser => {
      setUser(currentUser)


      if (currentUser) {
        axios.post('http://localhost:5000/jwt', { email: currentUser.email })
          .then(data => {
            // console.log(data.data);
            localStorage.setItem('access-token', data.data);
            setLoading(false)

          })

      } else {
        localStorage.removeItem('access-token')
      }
  
    })
    return () => {
      return unsubscribe
    }
  }, [])


  const authInfo = {
    user,
    loading,
    createUser,
    loggedUser,
    loggOut,
    updateProfiled,
    googleNewUser

  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
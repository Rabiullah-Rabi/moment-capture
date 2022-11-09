import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import app from "../../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // sign up  with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //jwt token
  const jwtToken = ({ userUid }) => {
    fetch("http://localhost:5000/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userUid),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("jwToken", data.token);
      });
  };
  // Log in  with email password
  const emailPassSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Log out User
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // popup for proverder log in
  const providerLogIn = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const authInfo = {
    user,
    loading,
    createUser,
    providerLogIn,
    emailPassSignIn,
    updateUser: updateUserProfile,
    logOut,
    jwtToken,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

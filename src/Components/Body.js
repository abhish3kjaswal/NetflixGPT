import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/Features/userSlice";
import Header from "./Header";

const Body = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        // ...
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse')

      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/')
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;

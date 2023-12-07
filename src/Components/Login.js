import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/Features/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef("");
  const name = useRef("");
  const password = useRef("");

  const toggleSignUpFn = () => {
    if(email.current.value) email.current.value = "";
    if(password.current.value) password.current.value = "";
    
    setIsSignIn(!isSignIn);
    setErrorMsg("");
  };

  const handleFormSubmission = (e) => {
    e && e.preventDefault();
    e && e.stopPropagation();

    let emailVal = email?.current?.value;
    let passwordVal = password?.current?.value;
    let nameVal = name?.current?.value;

    //Validate the form data validation
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value
    );
    if (message) setErrorMsg(message);
    else setErrorMsg("");


    if (message !== null) return;

    // SignIn , Sign Up Logic
    if (!isSignIn) {
      //Sign Up Logic

      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameVal,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              // ...
              dispatch(addUser({ uid, email, displayName }));
              email.current.value = "";
              password.current.value = "";
              name.current.value = "";
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
          //   dispatch(addUser())
          // ..
        });
    } else {
      //Sign In Form
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="backgroundImg"
        />
      </div>
      <form
        className="bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 opacity-80 text-white"
        onSubmit={handleFormSubmission}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <div className="p-2 py-3">
          {!isSignIn && (
            <input
              className="p-2 my-4 w-full bg-gray-700 rounded-sm"
              type="text"
              ref={name}
              placeholder="Enter Name"
            />
          )}
          <input
            className="p-2 my-4 w-full bg-gray-700 rounded-sm"
            type="text"
            ref={email}
            placeholder="Enter Email"
          />
          <input
            className="p-2 my-4 w-full bg-gray-700 rounded-sm"
            type="password"
            ref={password}
            placeholder="Enter Password"
          />
          {!isSignIn && (
            <input
              className="p-2 my-4 w-full bg-gray-700 rounded-sm"
              type="password"
              placeholder="Confirm Password"
            />
          )}
          <p className="text-red-500 font-bold text-sm">{errorMsg || ""}</p>
          <button
            className="py-4 my-5 bg-red-700 w-full rounded-sm"
            type={"submit"}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-sm cursor-pointer" onClick={toggleSignUpFn}>
            {isSignIn
              ? "Are you new to netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

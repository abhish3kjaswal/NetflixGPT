import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignUpFn = () => {
    setIsSignIn(!isSignIn);
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
      <form className="bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 opacity-80 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <div className="p-2 py-3">
            {!isSignIn &&  <input
            className="p-2 my-4 w-full bg-gray-700 rounded-sm"
            type="text"
            placeholder="Enter Name"
          />}
          <input
            className="p-2 my-4 w-full bg-gray-700 rounded-sm"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="p-2 my-4 w-full bg-gray-700 rounded-sm"
            type="password"
            placeholder="Enter Password"
          />
          {!isSignIn && (
            <input
              className="p-2 my-4 w-full bg-gray-700 rounded-sm"
              type="password"
              placeholder="Confirm Password"
            />
          )}
          <button className="py-4 my-5 bg-red-700 w-full rounded-sm">
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

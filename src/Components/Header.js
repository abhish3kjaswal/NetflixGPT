import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/errorPage");
      });
  };
  return (
    <div className="absolute h-24 w-full px-8 py-1 bg-gradient-to-b from-black z-10 ">
      <div className="w-68 h-24 flex justify-between">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflixLogo"
          className="h-[100%]"
        />
        {user && (
          <div className="flex items-center justify-between">
            <img
              className="h-12 w-12"
              src={
                "https://occ-0-6335-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
              }
              alt="userImage"
            />
            <div>
              <h6 className="cursor-pointer font-semibold">
                {user?.displayName || ""}
              </h6>
              <button
                className="cursor-pointer font-semibold text-white"
                onClick={() => {
                  handleSignOut();
                }}
              >
                (Sign Out)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

import { useNavigate } from "react-router-dom";
import supabase from "./config/supabaseClient";
import React, { useEffect, useState } from "react";

import Youtube from "./platforms/youtube";
import Twitter from "./platforms/twitter";
import Instagram from "./platforms/instagram";
import Facebook from "./platforms/facebook";
import Linkedin from "./platforms/linkedin";
import Pinterest from "./platforms/pinterest";
import TikTok from "./platforms/tiktok";

function Success() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function setUserIDCookie(userID) {
    document.cookie = `userID=${userID}; expires=${new Date(
      Date.now() + 86400000
    ).toUTCString()}; path=/`;
  }

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        // value.data.user
        if (value.data?.user) {
          console.log(value.data.user);
          setUserIDCookie(value.data.user.id);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div>
      {Object.keys(user).length !== 0 ? (
        <>
          <button onClick={() => signOutUser()}>sign out</button>
          <TikTok />
          <Pinterest />
          <Linkedin />
          <Facebook />
          <Instagram />
          <Youtube />
          <Twitter />
        </>
      ) : (
        <>
          <h1>User not logged in</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go back
          </button>
        </>
      )}
    </div>
  );
}

export default Success;

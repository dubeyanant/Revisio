import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "./config/supabaseClient";
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

  useEffect(() => {
    const getUserData = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        console.log(data.user);
        setUser(data.user);
      }
    };

    getUserData();
  }, []);

  const signOutUser = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div>
      {Object.keys(user).length !== 0 ? (
        <>
          <button onClick={signOutUser}>Sign Out</button>
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
          <button onClick={() => navigate("/")}>Go back</button>
        </>
      )}
    </div>
  );
}

export default Success;

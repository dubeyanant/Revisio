import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import supabase from "./config/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      // Forward to success page
      navigate("/success");
    } else {
      // Forward to login page
      navigate("/");
    }
  });

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      providers={["google"]}
    />
  );
}

export default Login;

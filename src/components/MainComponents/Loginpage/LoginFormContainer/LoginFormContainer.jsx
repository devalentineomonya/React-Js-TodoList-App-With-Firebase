import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { getAuth, signInAnonymously } from "firebase/auth";
import AuthContext from "@/Context/AuthContext";

const LoginFormContainer = () => {
  const { user } = useContext(AuthContext);


  function loginAnonymously() {
    const auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Anonymous login failed with error code:", errorCode, "and message:", errorMessage);
      });
  }

  return (
    <div className="flex justify-center flex-col items-center p-40 h-full w-full">
      <Button>Login With Google</Button>
      <Button className="mt-5" onClick={()=>loginAnonymously()}>
        Continue as Guest
      </Button>
    </div>
  );
};

export default LoginFormContainer;

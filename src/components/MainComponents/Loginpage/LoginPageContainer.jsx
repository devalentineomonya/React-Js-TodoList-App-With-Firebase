import React from "react";
import LoginPageImage from "./LoginPageImage";
import LoginFormContainer from "./LoginFormContainer/LoginFormContainer";

const LoginPageContainer = () => {
  return (
    <div className="flex justify-center items-center h-[700px] border border-gray-200 w-full max-w-[1100px] overflow-hidden rounded-xl">
      <div className="flex flex-1 h-full border-r-2 border-gray-300">
        <LoginPageImage />
      </div>
      <div className="flex flex-1 h-full">
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default LoginPageContainer;

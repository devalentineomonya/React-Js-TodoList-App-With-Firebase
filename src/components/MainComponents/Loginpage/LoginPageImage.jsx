import React from "react";
import loginBg from "@/assets/loginBg.png";
const LoginPageImage = () => {
  return (
    <div
      className="w-full h-full rounded-md flex justify-center  items-center"
      style={{
        background: `url(${loginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="h-56 w-96 bg-white border rounded-md flex justify-center items-center">
        <h1 className="font-semibold text-2xl text-black">
          Login with <span className="text-gray-500  underline">Google</span> or get banned for life.
        </h1>
      </div>
    </div>
  );
};

export default LoginPageImage;

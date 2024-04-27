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
      <div className="h-56 w-96 border-blue-700 dark:bg-slate-950 dark:border-slate-500 bg-white border-2 rounded-md flex justify-center items-center">
        <div className="flex flex-row w-full">
          <div className="flex justify-between w-full flex-col px-1">
            <div className="flex justify-between items-center w-full mb-4">
              <span className="text-md font-bold italic">Google Firebase</span>
              <span className="text-sm font-thin">30 days login Session</span>
            </div>
            <div className="text-md italic font-semibold text-start">
              <p>
                Login with google to access this todo list app this is to allow
                for saving your todo's in our application which works with
                Firebase
              </p>
            </div>
          </div>
          <div className="w-28 flex justify-center  items-center flex-col">
            <div>
                <h2 className="text-md font-bold italic">22930</h2>
            </div>
            <div className="mt-6 text-sky-500">
                View More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageImage;

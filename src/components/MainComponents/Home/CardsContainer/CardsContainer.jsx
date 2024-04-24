import React from 'react';

import { Pickaxe } from 'lucide-react';

const CardsContainer = ({ children }) => {
  return (
    <div className="w-full h-fit min-h-screen border dark:border-gray-400 border-gray-300 rounded-md bg-white overflow-y-scroll">
      <div className="w-full h-12 flex justify-between items-center px-1 py-2">
        <div className="flex  gap-x-2 items-center">
          <span>In Progress</span>
          <Pickaxe />
        </div>
        <div className="w-5 h-5 rounded-full bg-gray-400 text-gray-900 flex justify-center items-center ">
          <span>0</span>
        </div>
      </div>
      <div className="h-full w-full bg-[#f4f4f4] pt-4 ">
        <div className="w-full h-fit min-h-screen flex flex-col gap-y-4  px-4    ">{children}</div>
      </div>
    </div>
  );
};

export default CardsContainer;

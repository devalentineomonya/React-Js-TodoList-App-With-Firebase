import React, { useState } from 'react';

const DropingArea = ({ onDrop , length}) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragLeave={() => setShowDrop(false)}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      className={`transition-all duration-200 ease-in-out ${
        showDrop || length === 0
          ? "w-full h-[120px] border-2 border-dashed border-[#9d9d9d] rounded-md p-4 opacity-100 flex justify-center items-center  "
          : "opacity-0"
      } `}
    >
      Drop here
    </section>
  );
};

export default DropingArea;

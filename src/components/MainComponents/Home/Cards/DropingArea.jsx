import React, { useState } from 'react';

const DropingArea = ({ onDrop }) => {
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
        showDrop
          ? "w-full h-full border border-dashed border-[#dcdcdc] rounded-md p-4 opacity-100  "
          : "opacity-0"
      } `}
    >
      Drop here
    </section>
  );
};

export default DropingArea;

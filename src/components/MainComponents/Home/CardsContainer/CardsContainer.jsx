import React, { useState } from "react";
import DropingArea from "../Cards/DropingArea";
import NotAvailableCard from "../Cards/NotAvailableCard";
import TaskCard from "../Cards/TaskCard";

const CardsContainer = ({ tasks, icon, title, setActiveTab, onDrop, status }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div
      className={`w-full h-[800px] border dark:border-gray-400 border-gray-300 rounded-md bg-white overflow-y-scroll ${
        showDrop ? "border border-dashed border-gray-500" : null
      }`}
    >
      <div className="w-full h-12 flex justify-between items-center px-1 py-2">
        <div className="flex  gap-x-2 items-center">
          <span>{title}</span>
          {icon}
        </div>
        <div className="w-5 h-5 rounded-full bg-gray-400 text-gray-900 flex justify-center items-center ">
          <span>{tasks ? tasks.length : 0}</span>
        </div>
      </div>
      <div className={`h-full w-full bg-[#f4f4f4] pt-4`}>
        <div
          onDragEnter={() => setShowDrop(true)}
          onDragLeave={() => setShowDrop(false)}
          className={`w-full h-[800px] flex flex-col px-4 ${
            tasks && tasks.length === 0 ? "justify-center items-center" : null
          } `}
        >
          <DropingArea onDrop={() => onDrop(status, 0)} length={ tasks ? tasks.length : 0} />
          {tasks &&
            tasks.length > 0 &&
            tasks.map((task, i) => (
              <React.Fragment key={i}>
                <TaskCard
                  id={task.id}
                  task={task}
                  key={i}
                  setActiveTab={setActiveTab}
                />
                <DropingArea
                  key={i + 1}
                  onDrop={() => onDrop(status, i + 1)}
                />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;

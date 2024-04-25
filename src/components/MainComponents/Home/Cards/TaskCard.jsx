import React from 'react';

import { MessageSquareText } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@radix-ui/react-avatar';

const TaskCard = ({ task, setActiveTab }) => {
  return (
    <div
      className="draggable flex flex-col rounded-md py-2 px-1 justify-start bg-white h-40 active:opacity-70 active:border border-gray-500 cursor-grab active:cursor-grabbing"
      draggable
      onDragStart={() => setActiveTab(task.id)}
      onDragEnd={() => setActiveTab(null)}
    >
      <div className="flex justify-between items-center">
        <div className="text-md font-semibold">
          <p>{task.title}</p>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          )
        </div>
      </div>
      <div className="container p-0 overflow-hidden text-ellipsis whitespace-wrap h-20">
        <p className="truncate-3 text-[1px] font-sans text-start">
          {task.description}
        </p>
      </div>
      <div className="flex justify-between mt-1">
        <div className="flex flex-row">
          <MessageSquareText />
          <span>1</span>
        </div>
        <div className="flex gap-x-2 ">
          <button className="py-1 text-sm font-semibold text-orange-950 bg-yellow-600 rounded-full px-2">
            medium
          </button>
          <button className="py-1 text-sm font-semibold text-blue-600 bg-sky-500 rounded-full px-2">
            Infrastrucure
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

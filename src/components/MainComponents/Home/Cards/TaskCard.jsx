import React from 'react';

import { MessageSquareText } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@radix-ui/react-avatar';

const TaskCard = () => {
  return (
    <div className="flex flex-col rounded-md py-2 px-1 justify-start bg-white h-28">
      <div className="flex justify-between items-center">
        <div className='text-md font-semibold'>
          <p>Name</p>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div class="container p-0 overflow-hidden text-ellipsis whitespace-wrap h-8">
        <p class="truncate-3 text-sm font-sans">
          Duis ad irure tempor esse duis officia ad eiusmod. Dolor elit magna
          labore magna exercitation dolor et. Do occaecat commodo deserunt elit
        </p>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex flex-row">
          <MessageSquareText />
          <span>1</span>
        </div>
        <div className='flex gap-x-2 '>
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

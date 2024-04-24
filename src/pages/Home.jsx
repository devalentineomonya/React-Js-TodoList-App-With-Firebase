import React from 'react';

import TaskCard from '@/components/MainComponents/Home/Cards/TaskCard';
import CardsContainer
  from '@/components/MainComponents/Home/CardsContainer/CardsContainer';

const Home = () => {
  return (
    <div className=''>
        <div>

        </div>
      <div className="grid grid-cols-4 gap-x-4 h-screen ">
        <CardsContainer>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </CardsContainer>
        <CardsContainer>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </CardsContainer>
        <CardsContainer>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </CardsContainer>
        <CardsContainer>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </CardsContainer>
      </div>
    </div>
  )
}

export default Home

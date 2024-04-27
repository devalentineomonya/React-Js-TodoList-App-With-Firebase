import React, { useState, useEffect } from "react";
import CardsContainer from "@/components/MainComponents/Home/CardsContainer/CardsContainer";
import { ArrowBigDown, BookAIcon, Hammer, RollerCoaster } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
const Home = () => {
  const [taskList, setTaskList] = useState();

  const getTodoLists = async () => {
    const querySnapshot = await getDocs(collection(db, "usersTodoList"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  useEffect(() => {
    getTodoLists();
  }, [taskList]);

  const [activeTab, setActiveTab] = useState(null);
  const [doneTasks, setDoneTasks] = useState(null);
  const [inProgressTasks, setInProgressTasks] = useState(null);
  const [pendingTasks, setPendingTasks] = useState(null);
  const [abortedTasks, setAbortedTasks] = useState(null);

  // useEffect(() => {
  //   setDoneTasks(taskList.filter((task) => task.status === "done"));
  //   setInProgressTasks(taskList.filter((task) => task.status === "inProgress"));
  //   setPendingTasks(taskList.filter((task) => task.status === "pending"));
  //   setAbortedTasks(taskList.filter((task) => task.status === "aborted"));
  // }, [taskList]);

  const onDrop = (status, position) => {
    console.log(
      `${activeTab} is going to be dropped to ${status} at position ${position}`
    );
    if (activeTab === null || activeTab === undefined) return;
    const taskToMove = taskList.find((task) => task.id === activeTab);
    const updatedTasks = taskList.filter((task) => task.id !== activeTab);
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTaskList(updatedTasks);
  };

  return (
    // <div className="">
    //   <div className="grid xl:grid-cols-4 md:grid-cols-3 md:grid-rows-2 sm:grid-rows-2 grid-rows-4 sm:grid-cols-2 grid-cols-1 gap-x-4 h-screen ">
    //     <CardsContainer
    //       icon={<Hammer />}
    //       tasks={inProgressTasks}
    //       title="In Progress"
    //       status="inProgress"
    //       setActiveTab={setActiveTab}
    //       onDrop={onDrop}
    //     />
    //     <CardsContainer
    //       icon={<RollerCoaster />}
    //       tasks={pendingTasks}
    //       title="In Review"
    //       status="pending"
    //       setActiveTab={setActiveTab}
    //       onDrop={onDrop}
    //     />
    //     <CardsContainer
    //       icon={<BookAIcon />}
    //       tasks={doneTasks}
    //       title="Done"
    //       status="done"
    //       setActiveTab={setActiveTab}
    //       onDrop={onDrop}
    //     />
    //     <CardsContainer
    //       icon={<ArrowBigDown />}
    //       tasks={abortedTasks}
    //       title="Abandoned"
    //       status="aborted"
    //       setActiveTab={setActiveTab}
    //       onDrop={onDrop}
    //     />
    //   </div>
    // </div>
    <></>
  );
};

export default Home;

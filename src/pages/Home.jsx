import React, { useState, useEffect, useContext } from "react";
import CardsContainer from "@/components/MainComponents/Home/CardsContainer/CardsContainer";
import { ArrowBigDown, BookAIcon, Hammer, RollerCoaster } from "lucide-react";
import { useTaskContext } from "@/Context/TaskContext";
import AuthContext from "@/Context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

const Home = () => {
  const {taskList, setTaskList } = useTaskContext();
  const [activeTab, setActiveTab] = useState(null);
  const [doneTasks, setDoneTasks] = useState([]);
  const [abortedTasks, setAbortedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (taskList && taskList.length > 0) {
      setDoneTasks(
        taskList.filter(
          (task) => task.todoStatus === "done" && task.userEmail === user.email
        ) || []
      );
      setInProgressTasks(
        taskList.filter(
          (task) =>
            task.todoStatus === "inProgress" && task.userEmail === user.email
        ) || []
      );
      setPendingTasks(
        taskList.filter(
          (task) =>
            task.todoStatus === "pending" && task.userEmail === user.email
        ) || []
      );
      setAbortedTasks(
        taskList.filter(
          (task) =>
            task.todoStatus === "cancelled" && task.userEmail === user.email
        ) || []
      );
    }
  }, [taskList]);

  const onDrop = async (status, position) => {
    if (activeTab === null || activeTab === undefined || taskList.length === 0)
      return;

    const taskToMove = taskList.find((task) => task.id === activeTab);

    if (!taskToMove) return;

    const updatedTasks = [...taskList.filter((task) => task.id !== activeTab)];

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      todoStatus: status,
    });
    const task = {
      ...taskToMove,
      todoStatus: status,
    };
    await setDoc(doc(db, "usersTodoList", activeTab), {
      ...task,
    });

    setTaskList(updatedTasks);
  };

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-4 xl:grid-cols-4 md:grid-cols-3  gap-x-4 h-[calc(100vh-130px)] ">
  
      <CardsContainer
        icon={<Hammer />}
        tasks={inProgressTasks}
        title="In Progress"
        status="inProgress"
        setActiveTab={setActiveTab}
        onDrop={onDrop}
      />
      <CardsContainer
        icon={<RollerCoaster />}
        tasks={pendingTasks}
        title="In Review"
        status="pending"
        setActiveTab={setActiveTab}
        onDrop={onDrop}
      />
      <CardsContainer
        icon={<BookAIcon />}
        tasks={doneTasks}
        title="Done"
        status="done"
        setActiveTab={setActiveTab}
        onDrop={onDrop}
      />
      <CardsContainer
        icon={<ArrowBigDown />}
        tasks={abortedTasks}
        title="Abandoned"
        status="aborted"
        setActiveTab={setActiveTab}
        onDrop={onDrop}
      />
    </div>
  );
};

export default Home;

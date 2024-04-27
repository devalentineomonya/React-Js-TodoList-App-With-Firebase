import React, { useState, useEffect } from "react";
import CardsContainer from "@/components/MainComponents/Home/CardsContainer/CardsContainer";
import { ArrowBigDown, BookAIcon, Hammer, RollerCoaster } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { toast } from "sonner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [abortedTasks, setAbortedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);

  const getTodoLists = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "usersTodoList"));
      const taskList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTaskList(taskList);
    } catch (error) {
      console.error("An error occurred while fetching todo", error);
      toast("Failed to fetch tasks", {
        appearance: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodoLists();
  }, []);

  useEffect(() => {
    if (taskList && taskList.length > 0) {
      setDoneTasks(taskList.filter((task) => task.todoStatus === "done") || []);
      setInProgressTasks(
        taskList.filter((task) => task.todoStatus === "inProgress") || []
      );
      setPendingTasks(
        taskList.filter((task) => task.todoStatus === "pending") || []
      );
      setAbortedTasks(
        taskList.filter((task) => task.todoStatus === "aborted") || []
      );
    }
  }, [taskList]);

  const onDrop = (status, position) => {
    if (activeTab === null || activeTab === undefined) return;
    const taskToMove = taskList.find((task) => task.id === activeTab);
    const updatedTasks = taskList.filter((task) => task.id !== activeTab);
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      todoStatus: status,
    });
    setTaskList(updatedTasks);
  };

  return (
    <div className="">
      {loading ? (
        "Loading"
      ) : (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 md:grid-rows-2 sm:grid-rows-2 grid-rows-4 sm:grid-cols-2 grid-cols-1 gap-x-4 h-screen ">
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
      )}
    </div>
  );
};

export default Home;

import CardsContainer from "@/components/MainComponents/Home/CardsContainer/CardsContainer";
import { ArrowBigDown, BookAIcon, Hammer, RollerCoaster } from "lucide-react";
import { useEffect, useState } from "react";

let tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is the description of Task 1.",
    status: "done",
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is the description of Task 2.",
    status: "inProgress",
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is the description of Task 3.",
    status: "pending",
  },
  {
    id: 4,
    title: "Task 4",
    description: "This is the description of Task 4.",
    status: "aborted",
  },
  {
    id: 5,
    title: "Task 5",
    description: "This is the description of Task 5.",
    status: "done",
  },
  {
    id: 6,
    title: "Task 6",
    description: "This is the description of Task 6.",
    status: "inProgress",
  },
  {
    id: 7,
    title: "Task 7",
    description: "This is the description of Task 7.",
    status: "pending",
  },
  {
    id: 8,
    title: "Task 8",
    description: "This is the description of Task 8.",
    status: "aborted",
  },
];

const Home = () => {


  const [taskList, setTaskList] = useState(tasks);
  const [activeTab, setActiveTab] = useState(null);
  const [doneTasks, setDoneTasks] = useState(null);
  const [inProgressTasks, setInProgressTasks] = useState(null);
  const [pendingTasks, setPendingTasks] = useState(null);
  const [abortedTasks, setAbortedTasks] = useState(null);
  

  useEffect(() => {
    setDoneTasks(taskList.filter((task) => task.status === "done"));
    setInProgressTasks(taskList.filter((task) => task.status === "inProgress"));
    setPendingTasks(taskList.filter((task) => task.status === "pending"));
    setAbortedTasks(taskList.filter((task) => task.status === "aborted"));
  }, [taskList]);

  const onDrop = (status, position) => {
    console.log(
      `${activeTab} is going to be dropped to ${status} at position ${position}`
    );
    if (activeTab === null || activeTab === undefined) return;
    const taskToMove = taskList.filter((task) => task.id === activeTab);
    const updatedTasks = taskList.filter((task, id) => id !== activeTab);
    updatedTasks.slice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTaskList(updatedTasks);
  };

  return (
    <div className="">
      <div>{activeTab}</div>
      <div className="grid grid-cols-4 gap-x-4 h-screen ">
        <CardsContainer
          icon={<Hammer />}
          tasks={inProgressTasks}
          title="In Progress"
          setActiveTab={setActiveTab}
          onDrop={onDrop}
        />
        <CardsContainer
          icon={<RollerCoaster />}
          tasks={pendingTasks}
          title="In Review"
          setActiveTab={setActiveTab}
          onDrop={onDrop}
        />
        <CardsContainer
          icon={<BookAIcon />}
          tasks={doneTasks}
          title="Done"
          setActiveTab={setActiveTab}
          onDrop={onDrop}
        />
        <CardsContainer
          icon={<ArrowBigDown />}
          tasks={abortedTasks}
          title="Abandoned"
          setActiveTab={setActiveTab}
          onDrop={onDrop}
        />
      </div>
    </div>
  );
};

export default Home;

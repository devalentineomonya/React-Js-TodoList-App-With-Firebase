import React, { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const getTodoLists = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "usersTodoList"));
      const tasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTaskList(tasks);
    } catch (error) {
      console.error("An error occurred while fetching todo", error);
    }
  };

  useEffect(() => {
    getTodoLists();
  }, []);

  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskContext.Provider>
  );
};

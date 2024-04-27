import React, { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodoLists = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "usersTodoList"));
      const tasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTaskList(tasks);
    } catch (error) {
      console.error("An error occurred while fetching todo", error);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodoLists();
  }, []);

  return (
    <TaskContext.Provider value={{ taskList, setTaskList, loading }}>
      {children}
    </TaskContext.Provider>
  );
};

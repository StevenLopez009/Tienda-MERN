import {  createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from "../api/task";

const taskContext = createContext()

export const useTasks =()=>{
  const context = useContext(taskContext)

  if(!context){
    throw new Error("Usetask must be used within a TaskProvider")

  }
  return context
}

export function TaskProvider ({children}){
  const [tasks, setTasks]= useState([])

  const getTasks= async ()=>{
    try {
      const res= await getTasksRequest()
      setTasks(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const createTask = async(task)=>{
    const res = await createTaskRequest(task)
  }

  const deleteTask = async (id)=>{
    try {
      const res = await deleteTaskRequest(id)
      if(res.status === 204) setTasks(tasks.filter(task => task._id !== id))
    } catch (error) {
      console.log(error)
    }
    
  }

  const getTask= async (id)=>{
    const res = await getTaskRequest(id)
    return res.data
  }

  const updateTask = async (id,task)=>{
    try {
      await updateTaskRequest(id,task)
    } catch (error) {
      console.error(error)
      
    }
  }

  return(
    <taskContext.Provider value={{tasks, createTask, getTasks, deleteTask, getTask, updateTask}}>
      {children}
    </taskContext.Provider>
  )
}
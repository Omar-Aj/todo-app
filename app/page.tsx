"use client";
import { useState, useEffect } from "react";
import NewTodoTaskForm from "@/components/NewTodoTaskForm";
import TodoTasksList from "@/components/TodoTasksList";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoTaskType from "@/types/TodoTaskType";

export default function Home() {
  const [todoTasks, setTodoTasks] = useState<TodoTaskType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const todoTasksSetter = (newTask: TodoTaskType) => {
    setTodoTasks((prevState) => [...prevState, newTask]);
  };

  useEffect(() => {
    const allTodoTasksJson = localStorage.getItem("todoAppTasks");
    const allTodoTasks: TodoTaskType[] = allTodoTasksJson
      ? JSON.parse(allTodoTasksJson)
      : [];
    setTodoTasks(allTodoTasks);
    setIsLoading(false);
  }, []);

  return (
    <div className="h-full bg-neutral-100">
      <div className="container flex h-full max-w-3xl flex-col">
        {isLoading ? (
          <div className="flex flex-grow items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="flex-grow pt-4">
            <TodoTasksList
              todoTasks={todoTasks}
              todoTasksSetter={todoTasksSetter}
            />
          </div>
        )}
        <div className="sticky bottom-0 bg-neutral-100 py-4">
          <NewTodoTaskForm todoTasksSetter={todoTasksSetter} />
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import NewTodoTaskForm from "@/components/NewTodoTaskForm";
import TodoTasksList from "@/components/TodoTasksList";
import LoadingSpinner from "@/components/LoadingSpinner";
import TaskType from "@/types/TaskType";

export default function Home() {
  const [todoTasks, setTodoTasks] = useState<TaskType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>([]);

  const addTodoTask = (taskName: string, category: string) => {
    const newTask: TaskType = {
      id: todoTasks.length > 0 ? todoTasks[todoTasks.length - 1].id + 1 : 1,
      name: taskName,
      category: category,
      createdAt: Date.now(),
      isDone: false,
      isDeleted: false,
      deletedAt: null,
    };

    setTodoTasks((prevState) => {
      const newTodoTasks = [...prevState, newTask];
      localStorage.setItem("todoAppTasks", JSON.stringify(newTodoTasks));

      return newTodoTasks;
    });
  };

  const deleteTodoTask = (taskToDelete: TaskType) => {
    const taskToDeleteIndex = todoTasks.indexOf(taskToDelete);

    setTodoTasks((prevState) => {
      const newTodoTasks = prevState.toSpliced(taskToDeleteIndex, 1);
      localStorage.setItem("todoAppTasks", JSON.stringify(newTodoTasks));

      return newTodoTasks;
    });
  };

  useEffect(() => {
    const allTodoTasksJson = localStorage.getItem("todoAppTasks");
    const allTodoTasks: TaskType[] = allTodoTasksJson
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
              deleteTodoTask={deleteTodoTask}
            />
          </div>
        )}
        <div className="sticky bottom-0 bg-neutral-100 py-4">
          <NewTodoTaskForm addTodoTask={addTodoTask} />
        </div>
      </div>
    </div>
  );
}

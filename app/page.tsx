"use client";
import { useState, useEffect } from "react";
import NewTodoTaskForm from "@/components/NewTodoTaskForm";
import TodoTasksList from "@/components/TodoTasksList";
import LoadingSpinner from "@/components/LoadingSpinner";
import TaskType from "@/types/TaskType";
import CompletedTasksList from "@/components/CompletedTasksList";

export default function Home() {
  const [todoTasks, setTodoTasks] = useState<TaskType[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>([]);
  const [todoTasksTabSelected, setTodoTasksTabSelected] =
    useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      const sortedTasks = newTodoTasks.toSorted((a, b) => a.id - b.id);

      localStorage.setItem("todoAppTasks", JSON.stringify(sortedTasks));

      return sortedTasks;
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

  const markTodoTaskCompleted = (completedTask: TaskType) => {};

  const handleTabChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const buttonType = event.currentTarget.innerText.toLowerCase();
    setTodoTasksTabSelected((prevState) => {
      if (buttonType === "todo") return true;
      return false;
    });
  };

  useEffect(() => {
    const allTodoTasksJson = localStorage.getItem("todoAppTasks");
    const allTodoTasks: TaskType[] = allTodoTasksJson
      ? JSON.parse(allTodoTasksJson)
      : [];
    const allTodoTasksSorted = allTodoTasks.toSorted((a, b) => a.id - b.id);
    const allCompletedTasks = allTodoTasksSorted.filter(
      (task) => task.isDone === true,
    );

    setTodoTasks(allTodoTasksSorted);
    setCompletedTasks(allCompletedTasks);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className="container flex h-full max-w-3xl flex-col">
      <div className="flex gap-4 py-2">
        <button
          onClick={handleTabChange}
          className="flex-grow rounded bg-blue-300 py-2"
        >
          Todo
        </button>
        <button
          onClick={handleTabChange}
          className="flex-grow rounded bg-blue-300 py-2"
        >
          Completed
        </button>
      </div>

      {todoTasksTabSelected ? (
        <div className="flex flex-grow flex-col">
          <div className="flex-grow">
            <TodoTasksList
              todoTasks={todoTasks}
              deleteTodoTask={deleteTodoTask}
              markTodoTaskCompleted={markTodoTaskCompleted}
            />
          </div>
          <div className="sticky bottom-0 mt-4 bg-neutral-100 py-2">
            <NewTodoTaskForm addTodoTask={addTodoTask} />
          </div>
        </div>
      ) : (
        <div className="flex-grow">
          <CompletedTasksList completedTasks={completedTasks} />
        </div>
      )}
    </div>
  );
}

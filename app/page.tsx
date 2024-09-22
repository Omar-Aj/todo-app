"use client";
import { useState } from "react";
import { db } from "@/db";
import { useLiveQuery } from "dexie-react-hooks";
import TodoTaskType from "@/types/TodoTaskType";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoTasksList from "@/components/TodoTasksList";
import NewTodoTaskForm from "@/components/NewTodoTaskForm";
import CompletedTasksList from "@/components/CompletedTasksList";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string>("todo");
  const todoTasks = useLiveQuery(
    () => db.todoTasks.orderBy("id").toArray(),
    [selectedTab],
    "loading",
  );
  const completedTasks = useLiveQuery(
    () =>
      db.todoTasks
        .orderBy("id")
        .filter((t) => t.isCompleted)
        .toArray(),
    [selectedTab],
    [],
  );

  const addTodoTask = async (taskName: string, category: string) => {
    try {
      const id = await db.todoTasks.add({
        title: taskName,
        category: category,
        createdAt: new Date().toISOString(),
        isCompleted: false,
        completedAt: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodoTask = async (taskToDelete: TodoTaskType) => {
    await db.todoTasks.delete(taskToDelete.id);
  };

  const markTodoTaskCompleted = (completedTask: TodoTaskType) => {};

  const handleTabChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const buttonText = event.currentTarget.innerText.toLowerCase();
    setSelectedTab(buttonText);
  };

  if (todoTasks == "loading") {
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

      {selectedTab == "todo" ? (
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

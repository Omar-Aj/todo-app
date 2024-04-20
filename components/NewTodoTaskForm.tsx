"use client";
import { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FaPlus } from "react-icons/fa6";
import TodoTaskType from "@/types/TodoTaskType";

type Props = {
  todoTasksSetter: (newTask: TodoTaskType) => void;
};

const categories = [
  {
    label: "Important & Urgent",
    value: "important_urgent",
  },
  {
    label: "Important & Non-Urgent",
    value: "important_non_urgent",
  },
  {
    label: "Unimportant & Urgent",
    value: "unimportant_urgent",
  },
  {
    label: "Unimportant & Non-Urgent",
    value: "unimportant_non_urgent",
  },
];

const validateTaskAddition = (taskName: string, currentCategory: string) => {
  if (taskName.trim() === "") {
    return [false, "The task name cannot be empty."];
  }
  if (currentCategory.length === 0) {
    return [false, "A category is required for the task."];
  }

  return [true, ""];
};

const NewTodoTaskForm: FC<Props> = ({ todoTasksSetter }) => {
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [taskName, setTaskName] = useState<string>("");
  const { toast } = useToast();

  const addTaskHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    const [isTaskValid, errorMsg] = validateTaskAddition(
      taskName,
      currentCategory,
    );
    if (!isTaskValid) {
      return toast({
        description: errorMsg,
      });
    }

    const allTodoTasksJson = localStorage.getItem("todoAppTasks");
    const allTodoTasks: TodoTaskType[] = allTodoTasksJson
      ? JSON.parse(allTodoTasksJson)
      : [];
    const newTask: TodoTaskType = {
      id:
        allTodoTasks.length > 0
          ? allTodoTasks[allTodoTasks.length - 1].id + 1
          : 1,
      name: taskName,
      category: currentCategory,
      createdAt: Date.now(),
      isDone: false,
      isDeleted: false,
      deletedAt: null,
    };
    allTodoTasks.push(newTask);
    localStorage.setItem("todoAppTasks", JSON.stringify(allTodoTasks));

    todoTasksSetter(newTask);

    toast({
      description: "Task Added.",
      variant: "acceptance",
    });
  };

  return (
    <div className="flex flex-wrap gap-2 md:flex-nowrap">
      <Input
        placeholder="Task name..."
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Select
        value={currentCategory}
        onValueChange={(value) => setCurrentCategory(value)}
      >
        <SelectTrigger className="w-32 shrink-0 flex-grow cursor-default md:w-48">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        onClick={addTaskHandler}
        className="shrink-0 bg-neutral-600"
        size={"icon"}
      >
        <FaPlus />
      </Button>
    </div>
  );
};

export default NewTodoTaskForm;

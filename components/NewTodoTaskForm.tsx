"use client";
import { useState } from "react";
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

type TodoTask = {
  id: number;
  name: string;
  category: string;
  createdAt: number;
  isDone: boolean;
  isDeleted: boolean;
  deletedAt: number | null;
};

const categories = [
  {
    label: "Important & Urgent",
    value: "Important_Urgent",
  },
  {
    label: "Important & Non-Urgent",
    value: "Important_NonUrgent",
  },
  {
    label: "Unimportant & Urgent",
    value: "Unimportant_Urgent",
  },
  {
    label: "Unimportant & Non-Urgent",
    value: "Unimportant_NonUrgent",
  },
];

const NewTodoTaskForm = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [taskName, setTaskName] = useState<string>("");
  const { toast } = useToast();

  const addTaskHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    if (taskName.trim() === "") {
      toast({
        description: "The task name cannot be empty.",
      });
      return;
    }

    if (currentCategory.length === 0) {
      toast({
        description: "A category is required for the task.",
      });
      return;
    }

    const allTasksJson = localStorage.getItem("todoAppTasks");
    const allTasks: TodoTask[] = allTasksJson ? JSON.parse(allTasksJson) : [];
    const newTask: TodoTask = {
      id: allTasks.length ? allTasks[allTasks.length - 1].id + 1 : 1,
      name: taskName,
      category: currentCategory,
      createdAt: Date.now(),
      isDone: false,
      isDeleted: false,
      deletedAt: null,
    };
    allTasks.push(newTask);
    localStorage.setItem("todoAppTasks", JSON.stringify(allTasks));
  };

  return (
    <div className="flex space-x-2">
      <Input onChange={(e) => setTaskName(e.target.value)} />
      <Select
        value={currentCategory}
        onValueChange={(value) => setCurrentCategory(value)}
      >
        <SelectTrigger className="w-48 shrink-0 cursor-default">
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

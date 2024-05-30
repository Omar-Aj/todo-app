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
import TaskType from "@/types/TaskType";

type Props = {
  addTodoTask: (taskName: string, category: string) => void;
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

const validateTaskAddition = (
  taskName: string,
  currentCategory: string,
): [boolean, string] => {
  if (taskName.trim() === "") {
    return [false, "The task name cannot be empty."];
  }
  if (currentCategory.length === 0) {
    return [false, "A category is required for the task."];
  }
  return [true, ""];
};

const NewTodoTaskForm: FC<Props> = ({ addTodoTask }) => {
  const { toast } = useToast();

  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [taskName, setTaskName] = useState<string>("");

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

    try {
      addTodoTask(taskName, currentCategory);
      toast({
        description: "Task Added.",
        variant: "acceptance",
      });
      setTaskName("");
      setCurrentCategory("");
    } catch (error) {
      toast({
        description: `Task Not Added (${error})`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-2 md:flex-nowrap">
      <Input
        placeholder="Task name..."
        value={taskName}
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

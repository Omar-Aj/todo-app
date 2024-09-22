"use client";
import { FC, useState } from "react";
import CategoryEnum from "@/types/CategoryEnum";
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

type Props = {
  addTodoTask: (taskName: string, category: string) => void;
};

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
      <Select
        value={currentCategory}
        onValueChange={(value) => setCurrentCategory(value)}
      >
        <SelectTrigger className="cursor-default md:w-48">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(CategoryEnum).map((key) => (
            <SelectItem key={key} value={key}>
              {CategoryEnum[key as keyof typeof CategoryEnum]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        placeholder="Task name..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-32 shrink-0 flex-grow md:order-first md:w-auto"
      />
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

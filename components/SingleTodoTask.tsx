import { FC } from "react";
import TaskType from "@/types/TaskType";
import CategoryType from "@/types/CategoryType";
import { FaCheck } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

type Props = {
  todoTask: TaskType;
  deleteTodoTask: (taskToDelete: TaskType) => void;
};

const categoryStyle = {
  important_urgent: "border-red-300 bg-red-200",
  important_non_urgent: "border-orange-300 bg-orange-200",
  unimportant_urgent: "border-blue-300 bg-blue-200",
  unimportant_non_urgent: "border-neutral-300 bg-neutral-200",
};

const SingleTodoTask: FC<Props> = ({ todoTask, deleteTodoTask }) => {
  return (
    <div
      className={`flex space-x-4 rounded-lg border-4 border-dashed p-4 text-neutral-600 shadow-lg ${categoryStyle[todoTask.category as CategoryType]}`}
    >
      <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center self-center rounded-full bg-white shadow-md transition-shadow active:shadow-none">
        <FaCheck title="Check" />
      </button>
      <div className="w-[2px] rounded-full bg-neutral-500"></div>
      <p className="flex flex-grow items-center tracking-wide">
        {todoTask.name}
      </p>
      <button
        onClick={() => deleteTodoTask(todoTask)}
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center self-center rounded-full bg-white shadow-md transition-shadow active:shadow-none"
      >
        <FaTrashCan title="Delete" />
      </button>
    </div>
  );
};

export default SingleTodoTask;

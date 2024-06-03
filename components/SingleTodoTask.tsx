import { FC } from "react";
import TaskType from "@/types/TaskType";
import CategoryType from "@/types/CategoryType";
import { FaCheck } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

type Props = {
  todoTask: TaskType;
  deleteTodoTask: (taskToDelete: TaskType) => void;
  markTodoTaskCompleted: (taskToDelete: TaskType) => void;
};

const categoryStyle = {
  important_urgent: "border-red-300 bg-red-200",
  important_non_urgent: "border-orange-300 bg-orange-200",
  unimportant_urgent: "border-blue-300 bg-blue-200",
  unimportant_non_urgent: "border-neutral-300 bg-neutral-200",
};

const SingleTodoTask: FC<Props> = ({
  todoTask,
  deleteTodoTask,
  markTodoTaskCompleted,
}) => {
  return (
    <div
      className={`flex space-x-4 rounded-lg border-4 border-dashed p-4 text-neutral-600 shadow-lg ${categoryStyle[todoTask.category as CategoryType]}`}
    >
      <button
        onClick={() => markTodoTaskCompleted(todoTask)}
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center self-center rounded-full bg-white shadow-md transition-shadow active:shadow-none"
      >
        <FaCheck title="Check" />
      </button>
      <div className="w-[2px] flex-shrink-0 bg-neutral-500"></div>
      <div className="flex flex-grow items-center overflow-hidden">
        <p className="overflow-hidden break-words tracking-wide">
          {todoTask.name}
        </p>
      </div>
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

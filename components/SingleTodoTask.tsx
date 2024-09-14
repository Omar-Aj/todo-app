import { FC } from "react";
import TodoTaskType from "@/types/TodoTaskType";
import { FaCheck } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

type Props = {
  todoTask: TodoTaskType;
  deleteTodoTask: (taskToDelete: TodoTaskType) => void;
  markTodoTaskCompleted: (taskToDelete: TodoTaskType) => void;
};

const categoryStyle = {
  ImportantUrgent: "border-red-300 bg-red-200",
  ImportantNonUrgent: "border-orange-300 bg-orange-200",
  UnimportantUrgent: "border-blue-300 bg-blue-200",
  UnimportantNonUrgent: "border-neutral-300 bg-neutral-200",
};

const SingleTodoTask: FC<Props> = ({
  todoTask,
  deleteTodoTask,
  markTodoTaskCompleted,
}) => {
  return (
    <div
      className={`flex space-x-4 rounded-lg border-4 border-dashed p-4 text-neutral-600 shadow-lg ${categoryStyle[todoTask.category as keyof typeof categoryStyle]}`}
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
          {todoTask.title}
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

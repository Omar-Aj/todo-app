import { FC } from "react";
import TodoTaskType from "@/types/TodoTaskType";
import { FaCheck } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

type Props = {
  task: TodoTaskType;
  deleteTodoTask: (taskToDelete: TodoTaskType) => void;
  markTodoTaskCompleted?: (taskToDelete: TodoTaskType) => void;
};

const categoryStyle = {
  ImportantUrgent: "border-red-300 bg-red-200",
  ImportantNonUrgent: "border-orange-300 bg-orange-200",
  UnimportantUrgent: "border-blue-300 bg-blue-200",
  UnimportantNonUrgent: "border-neutral-300 bg-neutral-200",
};

const SingleTodoTask: FC<Props> = ({
  task,
  deleteTodoTask,
  markTodoTaskCompleted,
}) => {
  if (task.isCompleted)
    return (
      <div
        className={`flex space-x-2 rounded-lg border-4 border-dashed bg-opacity-80 p-2 text-neutral-600 shadow-lg ${categoryStyle[task.category as keyof typeof categoryStyle]}`}
      >
        <div className="flex flex-grow items-center overflow-hidden">
          <p className="overflow-hidden break-words text-sm tracking-wide line-through md:text-base">
            {task.title}
          </p>
        </div>
        <div>
          <button
            onClick={() => deleteTodoTask(task)}
            className="flex h-8 w-8 shrink-0 items-center justify-center self-center rounded-full bg-white shadow-md transition-shadow active:shadow-none"
          >
            <FaTrashCan title="Delete" />
          </button>
        </div>
      </div>
    );

  return (
    <div
      className={`flex space-x-2 rounded-lg border-4 border-dashed p-2 text-neutral-600 shadow-lg ${categoryStyle[task.category as keyof typeof categoryStyle]}`}
    >
      <div>
        <button
          onClick={() => markTodoTaskCompleted!(task)}
          className="flex h-8 w-8 shrink-0 items-center justify-center self-center rounded-full bg-white shadow-md transition-shadow active:shadow-none"
        >
          <FaCheck title="Check" />
        </button>
      </div>
      <div className="flex flex-grow items-center overflow-hidden">
        <p className="overflow-hidden break-words text-sm tracking-wide md:text-base">
          {task.title}
        </p>
      </div>
      <div>
        <button
          onClick={() => deleteTodoTask(task)}
          className="flex h-8 w-8 shrink-0 items-center justify-center self-center rounded-full bg-white shadow-md transition-shadow active:shadow-none"
        >
          <FaTrashCan title="Delete" />
        </button>
      </div>
    </div>
  );
};

export default SingleTodoTask;

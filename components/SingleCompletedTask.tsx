import { FC } from "react";
import TaskType from "@/types/TaskType";
import { FaCheck, FaTrashCan } from "react-icons/fa6";

type Props = {
  completedTask: TaskType;
};

const SingleCompletedTask: FC<Props> = ({ completedTask }) => {
  return (
    <div
      className={`flex space-x-4 rounded-lg border-4 border-dashed p-4 text-neutral-600 shadow-lg`}
    >
      <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center self-center rounded-full bg-white shadow-md transition-shadow active:shadow-none">
        <FaCheck title="Check" />
      </button>
      <div className="w-[2px] rounded-full bg-neutral-500"></div>
      <p className="flex flex-grow items-center tracking-wide">
        {completedTask.name}
      </p>
      <button
        // onClick={() => deleteTodoTask(todoTask)}
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center self-center rounded-full bg-white shadow-md transition-shadow active:shadow-none"
      >
        <FaTrashCan title="Delete" />
      </button>
    </div>
  );
};

export default SingleCompletedTask;

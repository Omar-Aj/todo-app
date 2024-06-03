import { FC } from "react";
import TaskType from "@/types/TaskType";
import SingleCompletedTask from "./SingleCompletedTask";

type Props = {
  completedTasks: TaskType[];
};

const CompletedTasksList: FC<Props> = ({ completedTasks }) => {
  return (
    <div className="flex flex-col space-y-4 overflow-y-auto">
      {completedTasks.map((task) => (
        <SingleCompletedTask key={task.id} completedTask={task} />
      ))}
    </div>
  );
};

export default CompletedTasksList;

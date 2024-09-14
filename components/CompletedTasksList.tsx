import { FC } from "react";
import TodoTaskType from "@/types/TodoTaskType";
import SingleCompletedTask from "./SingleCompletedTask";

type Props = {
  completedTasks: TodoTaskType[];
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

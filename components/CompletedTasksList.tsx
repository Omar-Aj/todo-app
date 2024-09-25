import { FC } from "react";
import TodoTaskType from "@/types/TodoTaskType";
import SingleTask from "./SingleTask";

type Props = {
  completedTasks: TodoTaskType[];
  deleteTodoTask: (taskToDelete: TodoTaskType) => void;
};

const CompletedTasksList: FC<Props> = ({ completedTasks, deleteTodoTask }) => {
  return (
    <div className="flex flex-col space-y-4 overflow-y-auto">
      {completedTasks.map((task) => (
        <SingleTask key={task.id} task={task} deleteTodoTask={deleteTodoTask} />
      ))}
    </div>
  );
};

export default CompletedTasksList;

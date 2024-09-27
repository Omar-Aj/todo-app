import { FC } from "react";
import TodoTaskType from "@/types/TodoTaskType";
import SingleTask from "./SingleTask";
import { Shadows_Into_Light_Two } from "next/font/google";

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {
  completedTasks: TodoTaskType[];
  deleteTodoTask: (taskToDelete: TodoTaskType) => void;
};

const CompletedTasksList: FC<Props> = ({ completedTasks, deleteTodoTask }) => {
  return (
    <div className="flex h-full flex-col space-y-4 overflow-y-auto pb-4">
      {completedTasks.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <h2
            className={`${shadowsIntoLightTwo.className} select-none text-center text-3xl font-bold text-neutral-600`}
          >
            Nothing to display!
          </h2>
        </div>
      ) : (
        completedTasks.map((task) => (
          <SingleTask
            key={task.id}
            task={task}
            deleteTodoTask={deleteTodoTask}
          />
        ))
      )}
    </div>
  );
};

export default CompletedTasksList;

import { FC } from "react";
import Category from "./Category";
import SingleTodoTask from "./SingleTodoTask";
import EmptyTodoTasks from "./EmptyTodoTasks";
import TodoTaskType from "@/types/TodoTaskType";

type Props = {
  todoTasks: TodoTaskType[];
  deleteTodoTask: (taskToDelete: TodoTaskType) => void;
  markTodoTaskCompleted: (taskToDelete: TodoTaskType) => void;
};

type CategoryGroup = {
  value: string;
  name: string;
  tip: string;
  tasks: TodoTaskType[];
};

const groupTodoTasksByCategory = (tasks: TodoTaskType[]) => {
  const categoryGroups: CategoryGroup[] = [
    {
      value: "ImportantUrgent",
      name: "Important | Urgent",
      tip: "Do First",
      tasks: [],
    },
    {
      value: "ImportantNonUrgent",
      name: "Important | Non-Urgent",
      tip: "Do Later",
      tasks: [],
    },
    {
      value: "UnimportantUrgent",
      name: "Unimportant | Urgent",
      tip: "Try to Delegate It",
      tasks: [],
    },
    {
      value: "UnimportantNonUrgent",
      name: "Unimportant | Non-Urgent",
      tip: "Don't Do or Do when You're Free",
      tasks: [],
    },
  ];

  tasks?.forEach((task) => {
    const taskCategory = task.category;
    if (taskCategory == "ImportantUrgent") {
      categoryGroups[0].tasks.push(task);
    } else if (taskCategory == "ImportantNonUrgent") {
      categoryGroups[1].tasks.push(task);
    } else if (taskCategory == "UnimportantUrgent") {
      categoryGroups[2].tasks.push(task);
    } else {
      categoryGroups[3].tasks.push(task);
    }
  });

  return categoryGroups;
};

const TodoTasksList: FC<Props> = ({
  todoTasks,
  deleteTodoTask,
  markTodoTaskCompleted,
}) => {
  const groupedTodoTasks = groupTodoTasksByCategory(todoTasks);

  if (todoTasks?.length == 0)
    return (
      <div className="flex h-full items-center justify-center">
        <EmptyTodoTasks />
      </div>
    );
  return (
    <div className="flex flex-col space-y-2">
      {groupedTodoTasks.map(({ value, name, tip, tasks }) => {
        if (tasks.length > 0)
          return (
            <div
              className="space-y-4 rounded-md border bg-white p-4 md:px-8 md:py-8"
              key={value}
            >
              <Category name={name} tip={tip} />
              {tasks.map((task) => (
                <SingleTodoTask
                  key={task.id}
                  todoTask={task}
                  deleteTodoTask={deleteTodoTask}
                  markTodoTaskCompleted={markTodoTaskCompleted}
                />
              ))}
            </div>
          );
      })}
    </div>
  );
};

export default TodoTasksList;

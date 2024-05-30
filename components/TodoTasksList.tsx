import { FC, useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Category from "./Category";
import SingleTodoTask from "./SingleTodoTask";
import EmptyTodoTasks from "./EmptyTodoTasks";
import TaskType from "@/types/TaskType";

type Props = {
  todoTasks: TaskType[];
  deleteTodoTask: (taskToDelete: TaskType) => void;
};

type CategoryGroup = {
  value: string;
  name: string;
  tip: string;
  tasks: TaskType[];
};

const categoriesOrder = [
  "important_urgent",
  "important_non_urgent",
  "unimportant_urgent",
  "unimportant_non_urgent",
];

const getCategoryNameTip = (categoryValue: string): string[] => {
  switch (categoryValue) {
    case "important_urgent":
      return ["Important & Urgent", "Do First"];
    case "important_non_urgent":
      return ["Important & Non-Urgent", "Do Later"];
    case "unimportant_urgent":
      return ["Unimportant & Urgent", "Try to Delegate It"];
    case "unimportant_non_urgent":
      return ["Unimportant & Non-Urgent", "Don't Do or Do when You're Free"];
    default:
      return ["", ""];
  }
};

const groupTodoTasksByCategory = (tasks: TaskType[]) => {
  const tasksByCategory: CategoryGroup[] = [];

  tasks.forEach((task) => {
    const existingCategory = tasksByCategory.find(
      (group) => group.value === task.category,
    );
    if (existingCategory) {
      existingCategory?.tasks.push(task);
    } else {
      const [categoryName, categoryTip] = getCategoryNameTip(task.category);
      tasksByCategory.push({
        value: task.category,
        name: categoryName,
        tip: categoryTip,
        tasks: [task],
      });
    }
  });

  return tasksByCategory;
};

const TodoTasksList: FC<Props> = ({ todoTasks, deleteTodoTask }) => {
  const [groupedTodoTasks, setGroupedTodoTasks] = useState<
    CategoryGroup[] | null
  >(null);

  useEffect(() => {
    todoTasks.sort(
      (a, b) =>
        categoriesOrder.indexOf(a.category) -
        categoriesOrder.indexOf(b.category),
    );
    const todoTasksByCategory = groupTodoTasksByCategory(todoTasks);
    setGroupedTodoTasks(todoTasksByCategory);
  }, [todoTasks]);

  if (todoTasks.length == 0)
    return (
      <div className="flex h-full items-center justify-center">
        <EmptyTodoTasks />
      </div>
    );
  return (
    <div className="flex flex-col space-y-4 overflow-y-auto">
      {groupedTodoTasks?.map(({ value, name, tip, tasks: todos }, index) => (
        <div className="space-y-4" key={value}>
          <Category name={name} tip={tip} />
          {todos.map((task) => (
            <SingleTodoTask
              key={task.id}
              todoTask={task}
              deleteTodoTask={deleteTodoTask}
            />
          ))}
          {index != groupedTodoTasks.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  );
};

export default TodoTasksList;

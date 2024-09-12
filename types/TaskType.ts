import CategoryEnum from "./CategoryEnum";

type TaskType = {
  id: number;
  name: string;
  category: CategoryEnum;
  createdAt: number;
  isDone: boolean;
  isDeleted: boolean;
  deletedAt: number | null;
};

export default TaskType;

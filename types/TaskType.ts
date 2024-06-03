type TaskType = {
  id: number;
  name: string;
  category: string;
  createdAt: number;
  isDone: boolean;
  isDeleted: boolean;
  deletedAt: number | null;
};

export default TaskType;
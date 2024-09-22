import Dexie, { EntityTable } from "dexie";
import TodoTaskType from "./types/TodoTaskType";

const db = new Dexie("TodoAppDb") as Dexie & {
  todoTasks: EntityTable<TodoTaskType, "id">;
};

db.version(1).stores({
  todoTasks: "++id, title, category, createdAt, isCompleted, completedAt",
});

export { db };

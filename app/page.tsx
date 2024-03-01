import NewTodoTaskForm from "@/components/NewTodoTaskForm";

export default function Home() {
  return (
    <div className="h-[calc(100vh-4rem)] bg-neutral-100">
      <div className="mx-auto flex h-full max-w-3xl flex-col px-8 py-4">
        <div className="flex-grow">
          <p>task1</p>
          <p>task1</p>
          <p>task1</p>
          <p>task1</p>
        </div>
        <NewTodoTaskForm />
      </div>
    </div>
  );
}

import Image from "next/image";
import { all_done } from "@/assets/illustrations/Illustrations";

const CompleteTasksSentence = "You've done it!";

const EmptyTodoTasks = () => {
  return (
    <div className="flex flex-col space-y-8">
      <Image
        src={all_done}
        alt="All Tasks Done"
        width={512}
        height={512}
        priority={true}
        className="shrink-0"
      />
      <h2 className="select-none text-center text-3xl font-bold text-neutral-600">
        {CompleteTasksSentence}
      </h2>
    </div>
  );
};

export default EmptyTodoTasks;

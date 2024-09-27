import Image from "next/image";
import { all_done } from "@/assets/illustrations/Illustrations";
import { Shadows_Into_Light_Two } from "next/font/google";

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: ["400"],
});

const CompleteTasksSentence = "You've done it!";

const EmptyTodoTasks = () => {
  return (
    <div className="flex flex-col space-y-8">
      <Image
        src={all_done}
        alt="All Tasks Done"
        width={512}
        priority={true}
        className="shrink-0"
      />
      <h2
        className={`${shadowsIntoLightTwo.className} select-none text-center text-3xl font-bold text-neutral-600`}
      >
        {CompleteTasksSentence}
      </h2>
    </div>
  );
};

export default EmptyTodoTasks;

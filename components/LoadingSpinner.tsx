import Image from "next/image";
import { loading } from "@/public/assets/svg/SVGs";

const LOADING_TEXT = "Loading";

const LoadingSpinner = () => {
  return (
    <div className="flex select-none flex-col items-center justify-center gap-2">
      <Image
        src={loading}
        alt="Loading"
        priority={true}
        className="animate-spin"
      />
      <span className="font-bold text-neutral-600">{LOADING_TEXT}</span>
    </div>
  );
};

export default LoadingSpinner;

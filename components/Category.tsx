import { FC } from "react";

type Props = {
  name: string;
  tip: string;
};

const Category: FC<Props> = ({ name, tip }) => {
  return (
    <div>
      <h2 className="text-base font-bold text-neutral-600">{name}</h2>
      <p className="text-sm font-bold text-neutral-500">{tip}</p>
    </div>
  );
};

export default Category;

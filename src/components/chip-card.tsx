import { FC } from "react";
type ChipCardProps = {
  chip: {
    id: string;
  };
};

const ChipCard: FC<ChipCardProps> = ({ chip }) => {
  return (
    <li className="inline-block list-none">
      <label className="cursor-pointer">
        <input className="peer sr-only" type="checkbox" />
        <div className="mx-0.5 my-1 rounded-xl bg-neutral-200 px-0.5 py-2.5 text-xs ring-1 ring-transparent peer-checked:ring-indigo-600 peer-checked:ring-offset-1">
          Чипс {chip.id}
        </div>
      </label>
    </li>
  );
};

export default ChipCard;

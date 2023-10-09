import { FC } from "react";
type ChipCardProps = {
  chip: {
    id: string;
  };
};

const ChipCard: FC<ChipCardProps> = ({ chip }) => {
  return (
    <li className="rounded-xl bg-neutral-200 px-0.5 py-2.5 text-xs">
      Чипс {chip.id}
    </li>
  );
};

export default ChipCard;

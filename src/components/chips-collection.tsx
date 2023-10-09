import { CHIPS_DATA } from "../../data/CHIPS_DATA";
import ChipContainer from "./chip-card";
const ChipsCollection = () => {
  const chipsMobile = CHIPS_DATA.slice(0, 5);
  const chipsTablet = CHIPS_DATA.slice(5, 10);
  const chipsPC = CHIPS_DATA.slice(10, 13);

  return (
    <ul className="flex gap-1.5">
      
      <li>
        <ul className="flex flex-wrap gap-1.5 ">
          {chipsMobile.map((chip) => (
            <ChipContainer key={chip.id} chip={chip} />
          ))}
        </ul>
      </li>

      <li className="rounded-xl bg-neutral-200 px-4 py-2.5 text-xs md:hidden lg:hidden">
        &#8230;
      </li>

      <li className="hidden md:block">
        <ul className="flex flex-wrap gap-1.5 ">
          {chipsTablet.map((chip) => (
            <ChipContainer key={chip.id} chip={chip} />
          ))}
        </ul>
      </li>

      <li className="hidden rounded-xl bg-neutral-200 px-4 py-2.5 text-xs sm:hidden md:block lg:hidden">
        &#8230;
      </li>
      <li className="hidden lg:block">
        <ul className="flex flex-wrap gap-1.5">
          {chipsPC.map((chip) => (
            <ChipContainer key={chip.id} chip={chip} />
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default ChipsCollection;

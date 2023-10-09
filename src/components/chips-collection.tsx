import { useState } from "react";
import { CHIPS_DATA } from "../../data/CHIPS_DATA";
import ChipContainer from "./chip-card";

const ChipsCollection = () => {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isTabletDropdownOpen, setIsTabletDropdownOpen] = useState(false);

  const handleMobileClick = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const handleTabletClick = () => {
    setIsTabletDropdownOpen(!isTabletDropdownOpen);
  };

  const chipsMobile = CHIPS_DATA.slice(0, 5);
  const chipsTablet = CHIPS_DATA.slice(5, 10);
  const chipsPC = CHIPS_DATA.slice(10, 13);

  return (
    <ul className="flex h-full items-center justify-center">
      <li>
        <ul className="flex flex-wrap">
          {chipsMobile.map((chip) => (
            <ChipContainer key={chip.id} chip={chip} />
          ))}
        </ul>
      </li>

      <li className="relative">
        <div
          onClick={handleMobileClick}
          className="mx-0.5 my-1 rounded-xl bg-neutral-200  px-4 py-2.5 text-xs md:hidden lg:hidden"
        >
          &#8230;
        </div>
        {isMobileDropdownOpen && (
          <div className="absolute -left-60 top-12 w-72 rounded px-4  py-2 shadow-md md:hidden lg:hidden">
            <ul className="flex flex-wrap">
              {chipsTablet.map((chip) => (
                <ChipContainer key={chip.id} chip={chip} />
              ))}
            </ul>
            <ul className="flex flex-wrap ">
              {chipsPC.map((chip) => (
                <ChipContainer key={chip.id} chip={chip} />
              ))}
            </ul>
          </div>
        )}
      </li>

      <li className="hidden md:block">
        <ul className="flex flex-wrap  ">
          {chipsTablet.map((chip) => (
            <ChipContainer key={chip.id} chip={chip} />
          ))}
        </ul>
      </li>
      <li className="relative">
        <div
          onClick={handleTabletClick}
          className="mx-0.5 my-1 hidden rounded-xl bg-neutral-200 px-4 py-2.5 text-xs sm:hidden md:block lg:hidden"
        >
          &#8230;
        </div>
        {isTabletDropdownOpen && (
          <div className="absolute -left-40 top-12 hidden w-48 rounded px-4 py-2 shadow-md md:block lg:hidden">
            <ul className="flex flex-wrap ">
              {chipsPC.map((chip) => (
                <ChipContainer key={chip.id} chip={chip} />
              ))}
            </ul>
          </div>
        )}
      </li>

      <li className="hidden lg:block">
        <ul className="flex flex-wrap ">
          {chipsPC.map((chip) => (
            <ChipContainer key={chip.id} chip={chip} />
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default ChipsCollection;

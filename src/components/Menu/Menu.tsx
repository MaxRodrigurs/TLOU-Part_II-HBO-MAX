import React from "react";
import { useState } from "react";

const Menu: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="phone:px-6 phone:py-2 laptop:py-8 tablet:flex laptop:mx-12 laptop:my-10 desktop:mx-28 justify-between laptop:backdrop-blur laptop:h-20 laptop:rounded-[26px] tablet:bg-black/50 items-center shadow-2xl">
      <div className="tablet:w-[10%] desktop:w-[6%]">
        <a href="https://www.hbomax.com/">
          <img className="cursor-pointer phone:my-6 tablet:my-4 laptop:my-0 phone:w-24 phone:h-11 tablet:w-full tablet:h-10 hover:opacity-80 ease-in-out duration-300" src="/src/assets/img/hbo-logo.svg" alt="HBO Max Logo" />
        </a>
      </div>

      <div className="font-gilroy-bold text-[#c5c1c1] phone:overflow-x-auto">
        <nav>
          <ul className="flex justify-between items-center h-12 phone:gap-16 phone:text-xs laptop:p-6 laptop:rounded-full ease-in-out duration-300">
            {menuLinks.map((link) => (
              <li key={link.text}>
                <a href={link.url} className="hover:font-gilroy-bold hover:text-white text-base ease-in-out duration-300">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="rounded-full outline outline-offset-2 outline-2 outline-purple-600 relative phone:collapse laptop:visible"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onBlur={() => setIsDropdownOpen(false)}>
        <img className="w-9 rounded-full hover:opacity-80" src="https://github.com/MaxRodrigurs.png" alt="Max Rodrigurs' GitHub Profile" />

        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 bg-black/80 rounded-lg shadow-lg font-gilroy-medium">
            <a href="Error" className="block px-4 py-2 hover:bg-zinc-800 rounded-lg">
              Settings
            </a>
            <a href="Error" className="block px-4 py-2 hover:bg-zinc-800 rounded-lg">
              Log Out
            </a>
          </div>
        )}
      </div>
    </header>
  );
};


const menuLinks = [
  {
    text: "MOVIES",
    url: "https://play.hbomax.com/page/urn:hbo:page:movies",
  },
  {
    text: "SERIES",
    url: "https://play.hbomax.com/page/urn:hbo:page:series",
  },
  {
    text: "ANIMATIONS",
    url: "https://play.hbomax.com/page/urn:hbo:page:animation",
  },
  {
    text: "UPGRADE",
    url: "https://www.hbomax.com/subscribe/plan-picker",
  },
];

export default Menu;

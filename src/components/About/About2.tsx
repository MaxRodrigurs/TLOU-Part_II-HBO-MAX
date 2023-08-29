import { useState } from 'react';
import { BsFillPlayFill, BsCheck2 } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';

function About2() {
  const [isIconChecked, setIsIconChecked] = useState(false);

  const handleClick = () => {
    setIsIconChecked(prevState => !prevState);
  };

  return (
    <div className="phone:w-full laptop:w-1/3 space-y-8 pointer-events-none">
      <div className="space-y-1 font-gilroy-medium">
        <p className="phone:text-sm tablet:text-base laptop:text-xl w-full font-gilroy-bold text-gray-300">2025 | 3 Seasons</p>
        <p className="phone:text-xs tablet:text-sm laptop:text-md mb-8 text-gray-400">Action | Adventure</p>
      </div>

      <img className="w-full" src="./src/assets/img/logo-part2.png" alt="" />

      <div className="flex gap-8 mt-8 mb-8 items-center justify-start pointer-events-auto">
        <WatchButton />
        <ToggleIcon isChecked={isIconChecked} onClick={handleClick} />
      </div>

      <div className="font-gilroy-medium">
        <h2 className="mb-7 text-gray-400 text-xl">
          Five years after a dangerous journey across the United States in a post-pandemic scenario,
          Ellie starts to confront the devastating physical and emotional repercussions of every action.
        </h2>

        <div className="flex justify-start items-center font-gilroy-bold gap-4">
          <img src="./src/assets/img/imdb-logo.svg" alt="" />
          <p className="text-2xl">9.5</p>
        </div>
      </div>
    </div>
  );
}

function WatchButton() {
  return (
    <button className="flex items-center rounded-lg font-gilroy-bold outline outline-offset-2 outline-2 p-4 gap-2 hover:shadow-black hover:outline-purple-600">
      <BsFillPlayFill />
      Watch Now!
    </button>
  );
}

interface ToggleIcon {
  isChecked: boolean;
  onClick: () => void;
}

function ToggleIcon({ isChecked, onClick }: ToggleIcon) {
  return (
    <button className="flex items-center justify-center rounded-full w-12 h-12 cursor-pointer hover:bg-white/20" onClick={onClick}>
      {isChecked ? <BsCheck2 size={30} /> : <FiPlus size={30} />}
    </button>
  );
}

export default About2;

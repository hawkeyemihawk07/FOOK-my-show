import { useState } from "react";
import Hamburger from "./Hamburger";
import DropdownNav from "../components/DropdownNav";

function Navbar() {
  const [hambuger, setHamburger] = useState(false);
  const [down, setDown] = useState(false);
  return (
    <div className="w-full flex  justify-center h-16  relative">
      <img
        className="bg-red-400 rounded-4xl cursor-pointer"
        src="Img/Logo.png"
      />
      <div className=" flex  justify-center">
        <img
          className="h-6 absolute z-50 left-114 top-5"
          src="src/assets/search.svg"
          alt="search"
        />
        <input
          className="bg-zinc-200 text-black px-10 relative h-8 mt-4  w-4xl rounded-md border-red-400"
          type="text"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
        />
      </div>
      <div className="flex flex-row items-center justify-center">
        <h1 className="px-3.5">Mumbai</h1>
        <img
          className="h-5 px-1.5"
          onClick={() => setDown(true)}
          src="src/assets/Downarrow.svg"
          alt="DropdownNav"
        />
        <button className="h-8 w-24 bg-red-400  cursor-pointer rounded-md">
          Sign-in
        </button>

        <img
          className="h-7 px-4 cursor-pointer   "
          onClick={() => setHamburger(true)}
          src="src/assets/burger-menu-svgrepo-com.svg"
          alt="Hamburger"
        />
      </div>
      {hambuger && <Hamburger setHamburger={setHamburger} />}
      {down && <DropdownNav setDown={setDown} />}
    </div>
  );
}
export default Navbar;

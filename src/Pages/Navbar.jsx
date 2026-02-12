import { useState } from "react";
import Hamburger from "./Hamburger";

function Navbar() {
  const [hambuger, setHamburger] = useState(false);
  return (
    <div className="w-full flex  justify-evenly h-16 bg-red-400 relative">
      <img className="bg-red-400 rounded-4xl " src="Img/Logo.png" />
      <div className=" flex justify-center">
        <input
          className="bg-black px-5 text-white h-8 mt-4  w-4xl rounded-md border-red-400"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-row items-center justify-center">
        <h1 className="px-3.5">Mumbai</h1>
        <button className="h-8 w-36 bg-white  cursor-pointer rounded-md">
          Sign-in
        </button>

        <img
          className="h-7 px-4 cursor-pointer              "
          onClick={() => setHamburger(true)}
          src="src/assets/burger-menu-svgrepo-com.svg"
          alt="Hamburger"
        />
      </div>
      {hambuger && <Hamburger />}
    </div>
  );
}
export default Navbar;

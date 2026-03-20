import { useState } from "react";
import Hamburger from "./Hamburger";
import DropdownNav from "../components/DropdownNav";
import { Link } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import { resolveAsset } from "../utils/resolveAsset";
import { useAuth } from "../context/useAuth";

function Navbar() {
  const [hambuger, setHamburger] = useState(false);
  const [down, setDown] = useState(false);
  const [up, setUp] = useState(false);
  const { currentUser, logout } = useAuth();

  return (
    <div className="relative z-20 w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="shrink-0 self-center md:self-auto">
          <img
            className="h-10 w-auto cursor-pointer object-contain sm:h-11"
            src={resolveAsset("src/assets/bookmyshow-logo.svg")}
            alt="BookMyShow"
          />
        </Link>

        <div className="relative w-full md:max-w-3xl md:flex-1">
          <img
            className="pointer-events-none absolute left-3 top-1/2 h-5 -translate-y-1/2"
            src={resolveAsset("src/assets/search.svg")}
            alt="search"
          />
          <input
            className="h-10 w-full rounded-md border border-zinc-300 bg-zinc-100 px-10 text-black outline-none transition-colors focus:border-red-400"
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-zinc-700"
            onClick={() => setDown(true)}
          >
            <span>Mumbai</span>
            <img
              className="h-4"
              src={resolveAsset("src/assets/Downarrow.svg")}
              alt="Open city picker"
            />
          </button>

          {currentUser ? (
            <>
              <button
                type="button"
                className="max-w-[180px] truncate rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600"
                onClick={() => setUp(true)}
              >
                {currentUser.email}
              </button>
              <button
                type="button"
                className="h-9 cursor-pointer rounded-md border border-zinc-300 px-4 text-zinc-700"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              type="button"
              className="h-9 cursor-pointer rounded-md bg-red-400 px-5 text-white"
              onClick={() => setUp(true)}
            >
              Sign-in
            </button>
          )}

          <img
            className="h-7 cursor-pointer"
            onClick={() => setHamburger(true)}
            src={resolveAsset("src/assets/burger-menu-svgrepo-com.svg")}
            alt="Open menu"
          />
        </div>
      </div>
      {hambuger && (
        <Hamburger
          setHamburger={setHamburger}
          openLogin={() => {
            setHamburger(false);
            setUp(true);
          }}
        />
      )}
      {down && <DropdownNav setDown={setDown} />}
      {up && <LoginPage setup={setUp} />}
    </div>
  );
}
export default Navbar;

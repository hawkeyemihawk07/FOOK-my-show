import { resolveAsset } from "../utils/resolveAsset";
import { useAuth } from "../context/useAuth";

function Hamburger({ setHamburger, openLogin }) {
  const { currentUser, logout } = useAuth();
  const hamInfo = [
    {
      src: "src/assets/Notification.svg",
      title: "Notification",
    },
    {
      src: "src/assets/Order Food.svg",
      title: "Your Order",
      info: "View all your bookings & purchases",
    },
    {
      src: "src/assets/Stream library.svg",
      title: "Stream Library",
      info: "Rented & Purchased Movies",
    },
    {
      src: "src/assets/Credit card.svg",
      title: "Credit Card",
      info: "View your Play Credit Card details and offers",
    },
    {
      src: "src/assets/message support.svg",
      title: "Help & Support",
      info: "View commonly asked queries and Chat",
    },
  ];

  return (
    <div className="absolute z-50 flex h-screen w-full">
      <div
        className="h-screen flex-1 bg-black/60"
        onClick={() => setHamburger(false)}
      ></div>
      <div className="flex h-full w-[88%] flex-col gap-7 bg-white py-1 sm:w-[70%] md:w-[42%] lg:w-[28%]">
        <div className="font-bold text-xl px-3 text-zinc-900 py-1 ">Hey!</div>

        <div className="flex gap-2 bg-[#ffff] px-4 py-2 shadow-sm shadow-zinc-800">
          <img
            className="h-10"
            src={resolveAsset("src/assets/rewards_login.avif")}
            alt="image"
          />
          <div className="flex flex-1 flex-col text-[#747eaa] text-md">
            <p className="text-sm font-medium text-zinc-900">
              {currentUser ? currentUser.email : "Unlock special offers & great benefits"}
            </p>
            <p className="text-xs text-zinc-500">
              {currentUser ? "Signed in on this browser" : "Login with email to manage bookings"}
            </p>
          </div>
          {currentUser ? (
            <button
              type="button"
              onClick={() => {
                logout();
                setHamburger(false);
              }}
              className="mt-1 h-8 rounded-lg border border-zinc-300 px-3 text-xs text-zinc-700"
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              onClick={openLogin}
              className="mt-1 h-8 rounded-lg border border-red-600 px-3 text-xs text-red-600"
            >
              Login/Register
            </button>
          )}
        </div>
        {hamInfo.map((ham) => (
          <div
            key={ham.title}
            className="flex w-full items-center justify-between px-6"
          >
            <div className="flex items-center gap-4">
              <img src={resolveAsset(ham.src)} alt={ham.title} />
              <div className="flex flex-col ">
                <p>{ham.title}</p>
                <p>{ham.info}</p>
              </div>
            </div>
            <p className="flex">&gt;</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hamburger;

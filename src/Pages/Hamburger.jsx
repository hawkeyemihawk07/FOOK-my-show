function Hamburger({ setHamburger }) {
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
    <div className="h-screen w-full  absolute flex z-50">
      <div
        className="h-screen w-[82%] bg-black/60 "
        onClick={() => setHamburger(false)}
      ></div>
      <div className="h-full bg-white py-1 w-[18%] items-start  flex flex-col gap-7">
        <div className="font-bold text-xl px-3 text-zinc-900 py-1 ">Hey!</div>

        <div className=" flex gap-2 py-2 items-center justify-center bg-[#ffff] shadow-sm px-4 shadow-zinc-800">
          <img
            className="h-10"
            src="src/assets/rewards_login.avif"
            alt="image"
          />
          <div className="text-[#747eaa] text-md">
            Unlock special offers & great benefits
          </div>
          <button className="border text-red-600 border-red-600 rounded-lg flex items-center justify-center mt-1 h-8 w-32">
            <div className="flex text-xs px-2 ">Login/Register</div>
          </button>
        </div>
        {hamInfo.map((ham) => (
          <div
            key={ham.title}
            className=" w-full  px-6 flex justify-between  items-center "
          >
            <div className="flex items-center gap-4">
              <img src={ham.src} alt="" />
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

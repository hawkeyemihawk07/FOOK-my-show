function Hamburger() {
  return (
    <div className="h-screen w-full   absolute flex z-50">
      <div className="h-screen w-[82%] bg-black/60"></div>
      <div className="h-full bg-white py-1 w-[18%] items-start  flex flex-col gap-7">
        <div className="font-bold text-xl px-3 text-zinc-900">Hey!</div>

        <div className=" flex gap-2 py-2 items-center justify-center bg-[#ffff] shadow-sm px-4 shadow-zinc-800">
          <img className="h-10" src="src/assets/rewards_login.avif" alt="" />
          <div className="text-[#747eaa] text-md">
            Unlock special offers & great benefits
          </div>
          <button className="border text-red-600 border-red-600 rounded-lg flex items-center justify-center mt-1 h-8 w-32">
            <div className="flex text-xs px-2 ">Login/Register</div>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Hamburger;

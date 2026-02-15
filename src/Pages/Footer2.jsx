function Footer2() {
  return (
    <div className="w-full h-24 flex bg-[#333333] items-center justify-center ">
      <div className="w-fit flex items-center text-white ">
        <img className="flex " src="src/assets/home.svg " alt="" />
        <div className="flex font-bold text-lg px-6">List your Show</div>
        <div className=" text-lg">
          Got a show, event, activity or a great experience? Partner with us &
          get listed on BookMyShow
        </div>
        <div className="flex w-fit pl-32">
          <button className="flex p-3 cursor-pointer bg-[#dc354b] rounded-lg font-bold">
            Contact today!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer2;

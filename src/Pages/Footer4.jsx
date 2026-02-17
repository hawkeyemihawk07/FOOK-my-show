function Footer4({ renderArray, title }) {
  //   const title = [];
  return (
    <div className="h-fit w-full flex items-center justify-center bg-[#333333]">
      <div className="h-full  w-[65%] text-sm text-zinc-500 flex flex-col items-center justify-center ">
        <div className="flex text-sm justify-between w-full  px-2 py-6 ">
          {title}
        </div>
        <div className=" w-full items-start  flex ">
          {renderArray.map((movie) => (
            <a
              // key={}
              className={`hover:text-white text-xs  ${renderArray.length === renderArray.indexOf(movie) + 1 ? "" : "border-r"} border-zinc-500 px-2`}
              href=""
            >
              {movie}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer4;

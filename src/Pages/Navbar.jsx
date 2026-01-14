function Navbar() {
  return (
    <div className="w-full flex  justify-evenly h-16 bg-red-400">
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
        <button className="h-8 w-36 bg-white rounded-md">Sign-in</button>
        <hamburger className="px-3.5">=</hamburger>
      </div>
    </div>
  );
}
export default Navbar;

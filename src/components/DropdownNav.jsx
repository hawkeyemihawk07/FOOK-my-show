function DropdownNav({ setDown }) {
  const cities = [
    { src: "src/components/Imgs/mumbai-selected.png", title: "Mumbai" },
    { src: "src/components/Imgs/koch.avif", title: "Kochi" },
    { src: "src/components/Imgs/pune.png", title: "Pune" },
    { src: "src/components/Imgs/hyd.png", title: "Hydrabad" },
    { src: "src/components/Imgs/bengluru.avif", title: "Bengluru" },
    { src: "src/components/Imgs/ahd.avif", title: "Ahemdabad" },
    { src: "src/components/Imgs/kolk.avif", title: "Kolkata" },
    { src: "src/components/Imgs/Delhi NCR.avif", title: "DelhiNCR" },
    { src: "src/components/Imgs/chd.avif", title: "Chandigaragh" },
    { src: "src/components/Imgs/chen.avif", title: "Chennai" },
  ];
  return (
    <div
      onClick={() => setDown(false)}
      className="h-screen w-full flex justify-center pt-20 bg-black/60 absolute z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white flex flex-col h-80   w-[50%] rounded-lg"
      >
        <div className="w-full p-3.5 flex">
          <img
            className="h-6 absolute z-50 left-125 top-26"
            src="src/assets/search.svg"
            alt="search"
          />
          <input
            className="w-full h-4 p-6 relative px-10 border outline-none border-zinc-400"
            type="text"
            placeholder=" Search for your cities"
          />
        </div>
        <div className="flex items-center px-4 gap-2.5 text-red-700 shadow-zinc-200 shadow-sm">
          <img className="h-4" src="src/assets/Location.svg" alt="location" />
          <p>Detect my location</p>
        </div>
        <div className="flex justify-center items-center p-4">
          <p>popular cities</p>
        </div>
        <div className="flex justify-evenly w-full">
          {cities.map((city) => (
            <div className="flex items-center flex-col">
              <img className="h-fit" src={city.src} alt="" />
              <p className="px-2">{city.title}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center text-red-600 p-4">
          <p>View all Cities</p>
        </div>
      </div>
    </div>
  );
}

export default DropdownNav;

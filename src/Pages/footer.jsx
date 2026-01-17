function footer() {
  return (
    <div className="h-auto w-full flex flex-col p-8 justify-center items-center">
      <h2 className="flex  font-bold text-xl pb-6">
        Trending Searches Right Now
      </h2>
      <div className="flex flex-wrap w-[50%] gap-7">
        {[
          "Krantijyoti Vidyalay Marathi Madhyam",
          "Dhurandhar",
          "Border 2",
          "The Housemaid",
          "Avatar: Fire and Ash",
          "Ikkis",
          "The Raja Saab",
          "Lollapalooza India 2026",
        ].map((item) => (
          <div className="h-fit w-fit p-4 border-2  flex flex-col" key={item}>
            <h1 className="text-lg font-bold text-red-500">{item}</h1>
            <h2>Movies</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default footer;

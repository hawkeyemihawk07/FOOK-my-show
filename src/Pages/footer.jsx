function footer() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <h2 className="pb-6 text-center text-xl font-bold sm:text-2xl">
          Trending Searches Right Now
        </h2>
        <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
            <div
              className="flex h-full min-h-28 flex-col rounded-2xl bg-[#d6d6d6] p-4"
              key={item}
            >
              <h1 className="text-base font-bold text-red-500 sm:text-lg">{item}</h1>
              <h2 className="pt-2 text-sm text-zinc-700">Movies</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default footer;

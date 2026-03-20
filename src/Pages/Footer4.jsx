function Footer4({ renderArray, title }) {
  return (
    <div className="flex w-full items-center justify-center bg-[#333333] px-4">
      <div className="flex w-full max-w-7xl flex-col justify-center py-5 text-zinc-500">
        <div className="w-full py-2 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-300">
          {title}
        </div>
        <div className="flex w-full flex-wrap gap-x-2 gap-y-2 text-xs sm:text-sm">
          {renderArray.map((movie, index) => (
            <span
              key={`${title}-${movie}`}
              className="text-zinc-500 hover:text-white"
            >
              {movie}
              {index !== renderArray.length - 1 ? " |" : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer4;

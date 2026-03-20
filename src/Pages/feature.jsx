function featurebar() {
  return (
    <div className="w-full border-b border-zinc-200 bg-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-sm text-zinc-700 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap pb-1 md:pb-0">
          <a className="hover:underline">Movies</a>
          <a className="hover:underline">Stream</a>
          <a className="hover:underline">Events</a>
          <a className="hover:underline">Plays</a>
          <a className="hover:underline">Sports</a>
          <a className="hover:underline">Activites</a>
        </div>
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap pb-1 md:pb-0">
          <a className="hover:underline">ListYourShow</a>
          <a className="hover:underline">Corporates</a>
          <a className="hover:underline">Offers</a>
          <a className="hover:underline">Gift Cards</a>
        </div>
      </div>
    </div>
  );
}
export default featurebar;

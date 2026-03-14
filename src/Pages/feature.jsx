function featurebar() {
  return (
    <div className="bg-gray-200 flex justify-evenly cursor-pointer">
      <div className="flex px-3.5">
        <a className="px-3.5 hover:underline">Movies</a>
        <a className="px-3.5 hover:underline">Stream</a>
        <a className="px-3.5 hover:underline">Events</a>
        <a className="px-3.5 hover:underline">Plays</a>
        <a className="px-3.5 hover:underline">Sports</a>
        <a className="px-3.5 hover:underline">Activites</a>
      </div>
      <div className="flex px-3.5">
        <a className="px-3.5 hover:underline">ListYourShow</a>
        <a className="px-3.5 hover:underline">Corporates</a>
        <a className="px-3.5 hover:underline">Offers</a>
        <a className="px-3.5 hover:underline">Gift Cards</a>
      </div>
    </div>
  );
}
export default featurebar;

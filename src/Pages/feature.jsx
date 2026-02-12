function featurebar() {
  return (
    <div className="bg-gray-200 flex justify-evenly cursor-pointer">
      <div className="flex px-3.5">
        <a className="px-3.5">Movies</a>
        <a className="px-3.5">Stream</a>
        <a className="px-3.5">Events</a>
        <a className="px-3.5">Plays</a>
        <a className="px-3.5">Sports</a>
        <a className="px-3.5">Activites</a>
      </div>
      <div className="flex px-3.5">
        <a className="px-3.5">ListYourShow</a>
        <a className="px-3.5">Corporates</a>
        <a className="px-3.5">Offers</a>
        <a className="px-3.5">Gift Cards</a>
      </div>
    </div>
  );
}
export default featurebar;

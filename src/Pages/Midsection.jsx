import Slider2 from "./Slider2";

function Midsection() {
  const Premier = [
    {
      title: "The Hunger Games: The Ballad of Songbirds and Snakes",

      Imglink: "src/Premier photos/The Hunger Games.avif",
    },
    {
      title: "Christmas Karma",

      Imglink: "src/Premier photos/hristmas Karma.avif",
    },
    {
      title: "Den Of Thevies",

      Imglink: "src/Premier photos/Dan of thevies.avif",
    },
    {
      title: "Slient Night Deadly Night",

      Imglink: "src/Premier photos/Slient Night.avif",
    },
    {
      title: "SAW 3",

      Imglink: "src/Premier photos/SAW3.avif",
    },
    {
      title: "SAW 5",

      Imglink: "src/Premier photos/SAW5.avif",
    },
    {
      title: "Civil War",

      Imglink: "src/Premier photos/Civil war.avif",
    },
    {
      title: "Blackmail",

      Imglink: "src/Premier photos/Blackmail.avif",
    },
    {
      title: "The Blair Witch",

      Imglink: "src/Premier photos/The Blair witch.avif",
    },
    {
      title: "The Internship",

      Imglink: "src/Premier photos/The Internship.avif",
    },
  ];
  return (
    <div className="bg-[#2b3148] flex justify-center items-center  h-fit pt-11 w-full">
      <div className="w-[80%] flex flex-col  h-fit">
        <img
          className="px-36"
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
          alt=""
        />

        <div className="flex flex-col gap-2">
          <div className="text-white text-2xl px-40  font-semibold">
            <h2>Premiers</h2>
            <h3>Brand new releases every Friday</h3>
          </div>
          <div className="flex text-white gap-10">
            <Slider2 movieInfo={Premier} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Midsection;

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
    <section className="w-full bg-[#2b3148] py-10 sm:py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <img
          className="w-full rounded-3xl object-cover"
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
          alt=""
        />

        <div className="flex flex-col gap-2">
          <div className="font-semibold text-white">
            <h2 className="text-xl sm:text-2xl">Premiers</h2>
            <h3 className="pt-1 text-sm text-zinc-300 sm:text-base">
              Brand new releases every Friday
            </h3>
          </div>
          <div className="flex text-white">
            <Slider2 movieInfo={Premier} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Midsection;

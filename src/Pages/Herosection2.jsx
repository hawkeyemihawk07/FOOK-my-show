// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Slider2 from "./Slider2";
// import Slider from "./Slider";

function Herosection2() {
  const large = "h-96";
  // const medium = "h-44";
  const movieInfo = [
    {
      title: "Red Lorry Film Festival 2026",
      genre: "Action/Horror/Romantic/Sci-Fi/Thriller",
      Imglink: "src/Recommended/Red Lorry Film Festival 2026.avif",
    },
    {
      title: "Border2",
      genre: "Action/Drama/War",
      Imglink: "src/Recommended/Border.avif",
    },
    {
      title: "Krantijyoti Vidyalay Marathi Madhyam",
      genre: "Drama",
      Imglink: "src/Recommended/Krantijyoti Vidyalay Marathi Madhyam.avif",
    },
    {
      title: "Aga Aga Sunbai! Kay Mhantay Sasubai?",
      genre: "Comedy/Drama",
      Imglink: "src/Recommended/Aga Aga Sunbai! Kay Mhantay Sasubai.avif",
    },
    {
      title: "Dhurandar",
      genre: "Action/Thriller",
      Imglink: "src/Recommended/Dhurandar.avif",
    },
    {
      title: "Mardaani 3",
      genre: "Action/Crime/Thriller",
      Imglink: "src/Recommended/Mardani.avif",
    },
    {
      title: "Happy Patel",
      genre: "Action/Comedy/Romantic",
      Imglink: "src/Recommended/HappyPatel.avif",
    },
    {
      title: "Primate",
      genre: "Action/Drama/War",
      Imglink: "src/Recommended/Primate.avif",
    },
    {
      title: "The House Maid",
      genre: "Action/Drama/War",
      Imglink: "src/Recommended/TheHousemaid.avif",
    },
    {
      title: "Mercy Supreme",
      genre: "Action/Crime/Sci-Fi/Thrillers",
      Imglink: "src/Recommended/Mercy.avif",
    },
  ];

  const liveEvents = [
    {
      Imglink: "src/Live events/adventure-fun-collection-202211140440.avif",
    },
    {
      Imglink:
        "src/Live events/amusement-parks-banner-desktop-collection-202503251132.avif",
    },
    {
      Imglink: "src/Live events/arts-crafts-collection-202211140440.avif",
    },
    {
      Imglink:
        "src/Live events/icc-top-live-events-collection-202512040235.avif",
    },
    {
      Imglink: "src/Live events/interactive-games-collection-202211140440.avif",
    },
    {
      Imglink:
        "src/Live events/kids-banner-desktop-collection-202503251132.avif",
    },
    {
      Imglink: "src/Live events/music-shows-collection-202211140440.avif",
    },
    {
      Imglink: "src/Live events/theatre-shows-collection-202211140440.avif",
    },
    {
      Imglink: "src/Live events/upskill-collection-202211140440.avif",
    },
    {
      Imglink:
        "src/Live events/workshop-and-more-web-collection-202211140440.avif",
    },
  ];

  return (
    <div className=" h-fit w-full flex flex-col justify-center items-center">
      <div className="flex  flex-col items-center justify-center h-auto w-[82%]">
        <div className="flex mt-6   items-center h-auto w-[80%]  justify-between">
          <h3 className="font-bold text-2xl">Recommended Movies</h3>
          <div className="text-red-500">See All&#x2978;</div>
        </div>
        <Slider2 movieInfo={movieInfo} height={large} />

        <div className="flex mt-8 h-fit w-full justify-center items-center">
          <div className="flex  h-28 rounded-3xl w-[80%]">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex mt-6  items-center h-auto w-[80%]  justify-between">
          <h3 className="font-bold  text-2xl">The Best Of Live Events </h3>
        </div>

        <Slider2 movieInfo={liveEvents} />

        <div className="flex mt-8 h-fit w-full justify-center pb-11 items-center">
          <div className="flex  h-36 rounded-3xl w-[80%]">
            <img
              className="rounded-sm"
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/best-of-bms-banner-2025-web-collection-202512100543.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Herosection2;

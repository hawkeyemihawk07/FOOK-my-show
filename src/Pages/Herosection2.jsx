// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Slider2 from "./Slider2";
// import Slider from "./Slider";

function Herosection2() {
  const large = "h-88";
  const medium = "h-44";
  return (
    <div className=" h-fit w-full flex flex-col justify-center items-center">
      <div className="flex  flex-col items-center justify-center h-auto w-[82%]">
        <div className="flex mt-6 mb-0.5  items-center h-auto w-[60%]  justify-between">
          <h3 className="font-bold">Recommended Movies</h3>
          <div className="">See All</div>
        </div>
        <Slider2 height={large} />

        <div className="flex mt-8 h-fit w-full justify-center items-center">
          <div className="flex bg-orange-500 h-36 rounded-3xl w-[80%]">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex mt-6  items-center h-auto w-[80%]  justify-between">
          <h3 className="font-bold  ">Best Movies</h3>
        </div>

        <Slider2 height={medium} />

        <div className="flex mt-8 h-fit w-full justify-center pb-11 items-center">
          <div className="flex bg-violet-500 h-36 rounded-3xl w-[80%]">
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

// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import Slider from "./Slider";

function Herosection() {
  return (
    <div className="flex  flex-col items-center justify-center h-auto w-full">
      <div className="flex mt-6 mb-6 items-center h-auto w-[60%]  justify-between">
        <h3 className="font-bold">Recommended Movies</h3>
        <div className="">See All</div>
      </div>
      <div className="h-fit w-full flex gap-2 justify-center items-center">
        <div className="h-96 w-80 flex  rounded-2xl bg-amber-300"></div>
        <div className="h-96 w-80 flex  rounded-2xl bg-amber-300"></div>
        <div className="h-96 w-80 flex  rounded-2xl bg-amber-300"></div>
        <div className="h-96 w-80 flex  rounded-2xl bg-amber-300"></div>
        <div className="h-96 w-80 flex  rounded-2xl bg-amber-300"></div>
      </div>
      <div className="flex mt-8 h-fit w-full justify-center items-center">
        <div className="flex bg-orange-500 h-40 rounded-3xl w-[60%]"></div>
      </div>
    </div>
  );
}
export default Herosection;

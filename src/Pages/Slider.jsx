// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

// function Slider({ slides, width }) {
//   return (
//     <div className="h-auto w-full flex justify-center items-center overflow-hidden ">
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={slides}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         {[1, 2, 3, 4].map((item) => (
//           <SwiperSlide>
//             <div className="flex w-full h-fit justify-center items-center">
//               <div
//                 style={{ width: width ? `${width}px` : "70%" }}
//                 className="w-[70%]
//                    h-auto  flex justify-center items-center"
//               >
//                 <div className="bg-red-300 h-80  w-full border-2 flex">
//                   {item}
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Slider;

// second slider

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css/pagination";

// function Slider() {
//   return (
//     <div className="h-auto w-full pb-7 pt-3 px-4">
//       <Swiper
//         style={{
//           // padding: "40px 0px",
//           "--swiper-navigation-color": "#fff", // change to your color
//           "--swiper-navigation-size": "28px", // optional: change size
//           "--swiper-pagination-color": "white", // active dot color
//           "--swiper-pagination-bullet-inactive-color": "black", // inactive dot color
//           "--swiper-pagination-bullet-inactive-opacity": "0.4", // optional
//         }}
//         centeredSlides:true
//         spaceBetween={20}
//         slidesPerView="auto"
//         navigation={true}
//         autoplay={true}
//         pagination={{ clickable: true }}
//         modules={[Navigation, Autoplay, Pagination]}
//       >
//         {[1, 2, 3, 4, 5, 6].map((item) => (
//           <SwiperSlide>
//             <div className="h-72 rounded-xl w-[98%] border bg-amber-500 ">
//               {item}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Slider;

// third slider

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { resolveAsset } from "../utils/resolveAsset";

function Slider() {
  const photos = [
    "src/Head slider/5off.avif",
    "src/Head slider/Kailash kher.avif",
    "src/Head slider/mahabharat.avif",
    "src/Head slider/Wicked.avif",
  ];
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <Swiper
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={16}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {photos.map((item) => (
          <SwiperSlide key={item} className="!w-[94%] sm:!w-[88%] lg:!w-[72%]">
            <div className="aspect-[21/9] overflow-hidden rounded-2xl sm:rounded-3xl lg:h-72 lg:aspect-auto">
              <img
                src={resolveAsset(item)}
                alt="photo"
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;

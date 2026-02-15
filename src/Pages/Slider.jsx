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

function Slider() {
  const photos = [
    "src/Head slider/5off.avif",
    "src/Head slider/Kailash kher.avif",
    "src/Head slider/mahabharat.avif",
    "src/Head slider/Wicked.avif",
  ];
  return (
    <div className="w-full py-6">
      <Swiper
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={10}
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
          <SwiperSlide key={item} className="w-[72%]!">
            <div className="h-72 rounded-xl overflow-hidden">
              <img
                src={item}
                alt="photo"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;

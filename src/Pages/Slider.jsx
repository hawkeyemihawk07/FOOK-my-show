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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Slider() {
  return (
    <div className="h-auto w-full pb-7 pt-3 px-4">
      <Swiper
        style={{
          // padding: "40px 0px",
          "--swiper-navigation-color": "#fff", // change to your color
          "--swiper-navigation-size": "28px", // optional: change size
          // "--swiper-pagination-color": "white", // active dot color
          // "--swiper-pagination-bullet-inactive-color": "#ffffff", // inactive dot color
          // "--swiper-pagination-bullet-inactive-opacity": "0.4", // optional
        }}
        spaceBetween={2}
        slidesPerView={1.5}
        navigation={true}
        modules={[Navigation]}
      >
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide>
            <div className="h-72 rounded-xl w-[98%] border bg-amber-500 ">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;

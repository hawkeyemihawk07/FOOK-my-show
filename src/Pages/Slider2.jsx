// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Slider2({ height }) {
  return (
    <div className="h-auto w-full pb-7 pt-3 px-40">
      <Swiper
        style={{
          padding: "40px 0px",
          "--swiper-navigation-color": "#000000", // change to your color
          "--swiper-navigation-size": "28px", // optional: change size
          // "--swiper-pagination-color": "white", // active dot color
          // "--swiper-pagination-bullet-inactive-color": "#ffffff", // inactive dot color
          // "--swiper-pagination-bullet-inactive-opacity": "0.4", // optional
        }}
        spaceBetween={25}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <SwiperSlide>
            <div
              className={`border rounded-md    border-black text-bold ${height}  `}
            >
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider2;

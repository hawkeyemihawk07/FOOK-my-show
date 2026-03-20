// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// function Slider2({ height, searchMovies }) {
//   const renderArray = searchMovies.length
//     ? searchMovies
//     : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   return (
//     <div className="h-auto w-full pb-7 pt-3 px-40">
//       <Swiper
//         style={{
//           padding: "40px 0px",
//           "--swiper-navigation-color": "#000000", // change to your color
//           "--swiper-navigation-size": "28px", // optional: change size
//           // "--swiper-pagination-color": "white", // active dot color
//           // "--swiper-pagination-bullet-inactive-color": "#ffffff", // inactive dot color
//           // "--swiper-pagination-bullet-inactive-opacity": "0.4", // optional
//         }}
//         spaceBetween={25}
//         slidesPerView={5}
//         navigation={true}
//         modules={[Navigation]}
//       >
//         {renderArray.map((item) => (
//           <SwiperSlide>
//             <div
//               className={`border rounded-md    border-black text-bold ${height}  `}
//             >
//               {item}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// second logic

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { resolveAsset } from "../utils/resolveAsset";

function Slider2({ movieInfo = [], interactive = false, height = "" }) {
  const navigate = useNavigate();
  const renderArray = Array.isArray(movieInfo) ? movieInfo.filter(Boolean) : [];

  const handleCardClick = (movieTitle) => {
    if (!interactive || !movieTitle) {
      return;
    }

    navigate(`/details?title=${encodeURIComponent(movieTitle)}`);
  };

  if (!renderArray.length) {
    return null;
  }

  return (
    <div className="h-auto w-full pb-7">
      <Swiper
        style={{
          padding: "10px 0px",
          "--swiper-navigation-color": "#FFFF",
          "--swiper-navigation-size": "28px",
          "--swiper-navigation-background": "#0000",
        }}
        grabCursor={true}
        watchOverflow={true}
        spaceBetween={18}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 1.15,
            spaceBetween: 14,
          },
          640: {
            slidesPerView: 2.15,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 3.15,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.15,
            spaceBetween: 22,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
        navigation
        modules={[Navigation]}
      >
        {renderArray.map((movie, index) => {
          const key = movie.title ?? movie.Imglink ?? `slide-${index}`;
          const hasMeta = Boolean(movie.title || movie.location || movie.genre);
          const frameClass =
            height || (hasMeta ? "aspect-[2/3]" : "aspect-[16/9]");

          return (
            <SwiperSlide key={key}>
              <article className="h-full  rounded-2xl font-bold">
                <div
                  className={`overflow-hidden rounded-2xl bg-zinc-100 ${frameClass}`}
                >
                  <img
                    className={`h-full w-full object-cover transition-transform duration-300 ${
                      interactive && movie.title
                        ? "cursor-pointer hover:scale-[1.02]"
                        : ""
                    }`}
                    onClick={() => handleCardClick(movie.title)}
                    src={resolveAsset(movie.Imglink)}
                    alt={movie.title ?? "event"}
                  />
                </div>
                {hasMeta && (
                  <div className="space-y-1 pt-3">
                    {movie.title && (
                      <h1 className="min-h-10 text-sm font-semibold text-zinc-900 sm:text-base">
                        {movie.title}
                      </h1>
                    )}
                    {movie.location && (
                      <h2 className="text-xs font-light text-zinc-700 sm:text-sm">
                        {movie.location}
                      </h2>
                    )}
                    {movie.genre && (
                      <h2 className="text-xs font-light text-zinc-700 sm:text-sm">
                        {movie.genre}
                      </h2>
                    )}
                  </div>
                )}
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider2;

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
import "swiper/css";
import "swiper/css/navigation";

function Slider2({ height = "h-96" }) {
  // const renderArray = searchMovies.length
  //   ? searchMovies
  //   : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const movieInfo = [
    {
      title: "The Hunger Games: The Ballad of Songbirds and Snakes",
      genre: "Comedy/Drama/Sports",
      Imglink: "src/Premier photos/The Hunger Games.avif",
    },
    {
      title: "Border2",
      genre: "Action/Drama/War",
      Imglink: "src/Recommended/Border.avif",
    },
    {
      title: "Krantijyoti Vidyalay Marathi Madhyam",
      genre: "Action/Drama/War",
      Imglink: "src/Recommended/Krantijyoti Vidyalay Marathi Madhyam.avif",
    },
    {
      title: "Aga Aga Sunbai! Kay Mhantay Sasubai?",
      genre: "Comedy/Drama",
      Imglink: "src/Recommended/Aga Aga Sunbai! Kay Mhantay Sasubai.avif",
    },
    {
      title: "Dhurandar",
      genre: "Action/Drama/War",
      Imglink: "src/Recommended/Dhurandar.avif",
    },
    {
      title: "Mardaani 3",
      genre: "Action/Drama/War",
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

  return (
    <div className="h-auto w-full pb-7  px-40">
      <Swiper
        style={{
          padding: "10px 0px",
          "--swiper-navigation-color": "#FFFF",
          "--swiper-navigation-size": "28px",
          "--swiper-navigation-background": "#0000",
        }}
        spaceBetween={25}
        slidesPerView={5}
        navigation
        modules={[Navigation]}
      >
        {movieInfo.map((movie) => (
          <SwiperSlide key={movie}>
            <div className={` rounded-md h-fit  font-bold ${height}`}>
              <img className="h-96" src={movie.Imglink} alt="" />
              <h1 className="py-2">{movie.title}</h1>
              <h1 className="font-light text-black">{movie.genre}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider2;

// import Herosection from "./Pages/Herosection";
import Navbar from "./Pages/Navbar";
import Featurebar from "./Pages/feature";
import Slider from "./Pages/Slider";
import Herosection2 from "./Pages/Herosection2";
import Midsection from "./Pages/Midsection";
import Bottomsection from "./Pages/Bottomsection";
// import Bento from "./Pages/bento";
import Bento2 from "./Pages/Bento2";
import Footer from "./Pages/footer";
import Footer2 from "./Pages/Footer2";
import Footer3 from "./Pages/Footer3";
import Footer4 from "./Pages/Footer4";
import Footer5 from "./Pages/Footer5";
import Footer6 from "./Pages/Footer6";

// import { useEffect, useState } from "react";

// import StarRating from "./Pages/StarRating";
// import Herosection from "./Pages/Herosection";

function App() {
  //   const [movies, setMovies] = useState([]);
  //   const KEY = "7a6155fe";
  //   useEffect(function () {
  //     async function fetchMovies() {
  //       const res = await fetch(
  //         `http://www.omdbapi.com/?i=tt3896198&apikey${KEY}`
  //       );
  //       const data = await res.json();
  //       setMovies(data || []);
  //       console.log(data);
  //     }
  //     fetchMovies();
  // }, []);

  // const [searchMovies, setSearchMovies] = useState([]);
  // const query = "interstellar";
  // const [isOpen, setIsOpen] = useState(true);
  // const KEY = "b2b7658a";
  // useEffect(
  //   function () {
  //     async function fetchMovies() {
  //       const res = await fetch(
  //         `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
  //       );
  //       const data = await res.json();
  //       setSearchMovies(data.Search || []);
  //       console.log(data);
  //     }
  //     fetchMovies();
  //   },
  //   [KEY, query],
  // );
  // console.log(searchMovies);

  return (
    <div className="bg-white min-h-screen w-full select-none">
      <Navbar />
      <Featurebar />
      <Slider slides={2} />
      <Herosection2 />
      <Midsection />
      <Bottomsection />
      {/* <Bento2 /> */}
      <Footer />
      <Footer2 />
      <Footer3 />
      <Footer5 />
      <Footer6 />

      {/* <StarRating /> */}
    </div>
  );
}

export default App;

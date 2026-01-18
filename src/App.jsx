// import Herosection from "./Pages/Herosection";
import Navbar from "./Pages/Navbar";
import Featurebar from "./Pages/feature";
import Slider from "./Pages/Slider";
import Herosection2 from "./Pages/Herosection2";
import Midsection from "./Pages/Midsection";
import Bottomsection from "./Pages/Bottomsection";
import Bento from "./Pages/bento";
import Bento2 from "./Pages/Bento2";
import Footer from "./Pages/footer";

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

  return (
    <div className="bg-white min-h-screen w-full">
      <Navbar />
      <Featurebar />
      <Slider slides={2} />
      <Herosection2 />
      <Midsection />
      <Bottomsection />
      <Bento2 />
      <Footer />

      {/* <StarRating /> */}
    </div>
  );
}

export default App;

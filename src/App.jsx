import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./components/Login";
import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";

// import StarRating from "./Pages/StarRating";
// import Herosection from "./Pages/Herosection";

function App() {
  //   const [movies, setMovies] = useState([]);
  const KEY = "b2b7658a";
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
  const [detailedMovie, setDetailedMovie] = useState();
  // const movie = "Kantara";
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&t=${movie}`,
      );
      const data = await res.json();
      console.log(data);
      setDetailedMovie(data);
    }
    fetchMovies();
  }, [movie]);
  console.log(detailedMovie);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage setMovie={setMovie} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Details" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

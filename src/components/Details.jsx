import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { resolveAsset } from "../utils/resolveAsset";
import Navbar from "../Pages/Navbar";
import { useAuth } from "../context/useAuth";

const OMDB_API_KEY = "b2b7658a";
const MAX_SEATS_PER_BOOKING = 8;

function createFallbackMovie({
  title,
  genre,
  poster,
  plot,
  year = "Coming Soon",
  runtime = "TBA",
  rated = "TBA",
  language = "TBA",
  director = "To be announced",
  actors = "Cast details will be updated soon",
  writer = "Writing credits will be updated soon",
  awards = "Awards information unavailable",
  imdbRating = "TBA",
}) {
  return {
    Title: title,
    Year: year,
    Rated: rated,
    Runtime: runtime,
    Genre: genre,
    Director: director,
    Writer: writer,
    Actors: actors,
    Plot: plot,
    Language: language,
    Awards: awards,
    Poster: poster,
    imdbRating,
    Type: "movie",
    Response: "True",
    __isFallback: true,
  };
}

const FALLBACK_MOVIES = Object.fromEntries(
  [
    {
      key: "red lorry film festival 2026",
      title: "Red Lorry Film Festival 2026",
      genre: "Action, Horror, Romance, Sci-Fi, Thriller",
      poster: "src/Recommended/Red Lorry Film Festival 2026.avif",
      plot: "A curated festival title from the homepage recommendations.",
      language: "Multiple languages",
      director: "Festival line-up to be announced",
      actors: "Featured films and guests to be announced",
      writer: "Festival programming details coming soon",
    },
    {
      key: "border2",
      title: "Border2",
      genre: "Action, Drama, War",
      poster: "src/Recommended/Border.avif",
      plot: "A featured war drama from the recommended section.",
      language: "Hindi",
    },
    {
      key: "krantijyoti vidyalay marathi madhyam",
      title: "Krantijyoti Vidyalay Marathi Madhyam",
      genre: "Drama",
      poster: "src/Recommended/Krantijyoti Vidyalay Marathi Madhyam.avif",
      plot: "A recommended drama title from the homepage carousel.",
      language: "Marathi",
    },
    {
      key: "aga aga sunbai! kay mhantay sasubai?",
      title: "Aga Aga Sunbai! Kay Mhantay Sasubai?",
      genre: "Comedy, Drama",
      poster: "src/Recommended/Aga Aga Sunbai! Kay Mhantay Sasubai.avif",
      plot: "A featured comedy-drama from the recommended lineup.",
      language: "Marathi",
    },
    {
      key: "dhurandhar",
      title: "Dhurandhar",
      genre: "Action, Thriller",
      poster: "src/Recommended/Dhurandar.avif",
      plot: "A homepage-recommended action thriller.",
      language: "Hindi",
    },
    {
      key: "mardaani 3",
      title: "Mardaani 3",
      genre: "Action, Crime, Thriller",
      poster: "src/Recommended/Mardani.avif",
      plot: "A recommended crime thriller title.",
      language: "Hindi",
    },
    {
      key: "happy patel",
      title: "Happy Patel",
      genre: "Action, Comedy, Romance",
      poster: "src/Recommended/HappyPatel.avif",
      plot: "A featured recommendation from the homepage.",
      language: "Hindi",
    },
    {
      key: "primate",
      title: "Primate",
      genre: "Action, Drama, War",
      poster: "src/Recommended/Primate.avif",
      plot: "A recommended title from the carousel.",
      language: "English",
    },
    {
      key: "the house maid",
      title: "The House Maid",
      genre: "Action, Drama, War",
      poster: "src/Recommended/TheHousemaid.avif",
      plot: "A homepage recommendation with locally available artwork.",
      language: "English",
    },
    {
      key: "mercy supreme",
      title: "Mercy Supreme",
      genre: "Action, Crime, Sci-Fi, Thriller",
      poster: "src/Recommended/Mercy.avif",
      plot: "A featured sci-fi crime recommendation from the homepage.",
      language: "English",
    },
  ].map(({ key, ...movie }) => [key, createFallbackMovie(movie)])
);

const SEAT_CATEGORY_META = {
  Silver: {
    price: 420,
    badgeClass: "border border-sky-400/20 bg-sky-500/10 text-sky-100",
    seatClass:
      "border border-sky-400/20 bg-sky-400/10 text-sky-100 hover:border-sky-300/60 hover:bg-sky-300/20",
  },
  Gold: {
    price: 620,
    badgeClass: "border border-amber-400/20 bg-amber-500/10 text-amber-100",
    seatClass:
      "border border-amber-400/20 bg-amber-400/10 text-amber-100 hover:border-amber-300/60 hover:bg-amber-300/20",
  },
  Platinum: {
    price: 820,
    badgeClass: "border border-rose-400/20 bg-rose-500/10 text-rose-100",
    seatClass:
      "border border-rose-400/20 bg-rose-400/10 text-rose-100 hover:border-rose-300/60 hover:bg-rose-300/20",
  },
};

const IMAX_THEATERS = [
  {
    id: "lower-parel",
    name: "PVR IMAX with Laser",
    venue: "Phoenix Palladium, Lower Parel",
    hall: "Audi 05",
    distance: "3.2 km away",
    amenities: ["Laser Projection", "Dolby Atmos", "Recliner Rows"],
    showtimes: [
      { id: "lp-1015", label: "10:15 AM", note: "Morning show" },
      { id: "lp-1345", label: "1:45 PM", note: "Good availability" },
      { id: "lp-1720", label: "5:20 PM", note: "Fast filling" },
      { id: "lp-2110", label: "9:10 PM", note: "Prime time" },
    ],
  },
  {
    id: "thane",
    name: "Miraj IMAX",
    venue: "Viviana Mall, Thane",
    hall: "Audi IMX-1",
    distance: "12.8 km away",
    amenities: ["Laser 4K", "Couple Seats", "Parking Included"],
    showtimes: [
      { id: "th-1100", label: "11:00 AM", note: "Morning show" },
      { id: "th-1410", label: "2:10 PM", note: "Good availability" },
      { id: "th-1800", label: "6:00 PM", note: "Fast filling" },
      { id: "th-2145", label: "9:45 PM", note: "Prime time" },
    ],
  },
];

function createSeatRow({ label, category, layout, booked = [], accessible = [] }) {
  let seatNumber = 1;
  const bookedSet = new Set(booked);
  const accessibleSet = new Set(accessible);

  return {
    label,
    category,
    price: SEAT_CATEGORY_META[category].price,
    segments: layout.map((segmentSize) =>
      Array.from({ length: segmentSize }, () => {
        const seat = {
          id: `${label}${seatNumber}`,
          row: label,
          number: seatNumber,
          category,
          price: SEAT_CATEGORY_META[category].price,
          isBooked: bookedSet.has(seatNumber),
          isAccessible: accessibleSet.has(seatNumber),
        };

        seatNumber += 1;
        return seat;
      })
    ),
  };
}

const ROW_CONFIGS = [
  ["A", "Silver", [5, 8, 5], [2, 7, 10, 14, 17]],
  ["B", "Silver", [5, 8, 5], [1, 6, 11, 12, 18]],
  ["C", "Silver", [5, 8, 5], [3, 8, 9, 15]],
  ["D", "Silver", [5, 8, 5], [4, 7, 13, 16]],
  ["E", "Gold", [6, 10, 6], [2, 5, 9, 11, 18, 21]],
  ["F", "Gold", [6, 10, 6], [1, 6, 8, 14, 17, 22]],
  ["G", "Gold", [6, 10, 6], [3, 7, 10, 15, 19]],
  ["H", "Gold", [6, 10, 6], [2, 4, 11, 16, 20]],
  ["I", "Platinum", [7, 10, 7], [1, 8, 10, 17, 20, 23]],
  ["J", "Platinum", [7, 10, 7], [4, 9, 12, 15, 18, 24]],
  ["K", "Platinum", [8, 10, 8], [2, 6, 11, 14, 19, 22], [1, 26]],
  ["L", "Platinum", [8, 10, 8], [5, 9, 14, 18, 21, 25], [1, 26]],
];

const AUDITORIUM_ROWS = ROW_CONFIGS.map(
  ([label, category, layout, booked, accessible = []]) =>
    createSeatRow({ label, category, layout, booked, accessible })
);

const SEAT_LOOKUP = Object.fromEntries(
  AUDITORIUM_ROWS.flatMap((row) =>
    row.segments.flatMap((segment) => segment.map((seat) => [seat.id, seat]))
  )
);

const TOTAL_SEAT_COUNT = AUDITORIUM_ROWS.reduce(
  (count, row) => count + row.segments.reduce((rowCount, segment) => rowCount + segment.length, 0),
  0
);

function normalizeTitle(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function getFallbackMovie(title) {
  const fallbackMovie = FALLBACK_MOVIES[normalizeTitle(title)];

  if (!fallbackMovie) {
    return null;
  }

  return { ...fallbackMovie, Poster: resolveAsset(fallbackMovie.Poster) };
}

function pickValue(value, fallbackValue) {
  if (!value || value === "N/A") {
    return fallbackValue;
  }

  return value;
}

function mergeMovieDetails(apiMovie, fallbackMovie) {
  if (!fallbackMovie) {
    return apiMovie;
  }

  return {
    ...fallbackMovie,
    ...apiMovie,
    Title: pickValue(apiMovie.Title, fallbackMovie.Title),
    Year: pickValue(apiMovie.Year, fallbackMovie.Year),
    Rated: pickValue(apiMovie.Rated, fallbackMovie.Rated),
    Runtime: pickValue(apiMovie.Runtime, fallbackMovie.Runtime),
    Genre: pickValue(apiMovie.Genre, fallbackMovie.Genre),
    Director: pickValue(apiMovie.Director, fallbackMovie.Director),
    Writer: pickValue(apiMovie.Writer, fallbackMovie.Writer),
    Actors: pickValue(apiMovie.Actors, fallbackMovie.Actors),
    Plot: pickValue(apiMovie.Plot, fallbackMovie.Plot),
    Language: pickValue(apiMovie.Language, fallbackMovie.Language),
    Awards: pickValue(apiMovie.Awards, fallbackMovie.Awards),
    Poster: pickValue(apiMovie.Poster, fallbackMovie.Poster),
    imdbRating: pickValue(apiMovie.imdbRating, fallbackMovie.imdbRating),
    __isFallback: false,
  };
}

function getErrorMessage(fetchError) {
  if (fetchError instanceof Error) {
    return fetchError.message;
  }

  return "Unable to load movie details right now.";
}

function formatDetail(value, fallback = "TBA") {
  return pickValue(value, fallback);
}

function sortSeatsByRowAndNumber(leftSeat, rightSeat) {
  if (leftSeat.row !== rightSeat.row) {
    return leftSeat.row.localeCompare(rightSeat.row);
  }

  return leftSeat.number - rightSeat.number;
}

function getDefaultShowtimeId(theater) {
  return theater.showtimes[2]?.id ?? theater.showtimes[0]?.id ?? "";
}

function getSeatButtonClasses(seat, isSelected) {
  const baseClasses =
    "flex h-8 w-8 items-center justify-center rounded-lg border text-[10px] font-semibold transition-all duration-200";

  if (seat.isBooked) {
    return `${baseClasses} cursor-not-allowed border-zinc-800 bg-zinc-950 text-zinc-600`;
  }

  if (isSelected) {
    return `${baseClasses} border-cyan-200 bg-cyan-300 text-zinc-950 shadow-[0_0_18px_rgba(34,211,238,0.5)]`;
  }

  if (seat.isAccessible) {
    return `${baseClasses} border-emerald-300/30 bg-emerald-500/10 text-emerald-100 hover:border-emerald-200/60 hover:bg-emerald-400/20`;
  }

  return `${baseClasses} ${SEAT_CATEGORY_META[seat.category].seatClass}`;
}

function Details() {
  const { currentUser } = useAuth();
  const [searchParams] = useSearchParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [selectedTheaterId, setSelectedTheaterId] = useState(IMAX_THEATERS[0].id);
  const [selectedShowtimeId, setSelectedShowtimeId] = useState(
    getDefaultShowtimeId(IMAX_THEATERS[0])
  );
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingNotice, setBookingNotice] = useState("");
  const cardRef = useRef(null);
  const title = searchParams.get("title")?.trim() ?? "";

  const activeTheater =
    IMAX_THEATERS.find((theater) => theater.id === selectedTheaterId) ?? IMAX_THEATERS[0];
  const activeShowtime =
    activeTheater.showtimes.find((showtime) => showtime.id === selectedShowtimeId) ??
    activeTheater.showtimes[0];
  const selectedSeatDetails = selectedSeats
    .map((seatId) => SEAT_LOOKUP[seatId])
    .filter(Boolean)
    .sort(sortSeatsByRowAndNumber);
  const ticketSubtotal = selectedSeatDetails.reduce((total, seat) => total + seat.price, 0);
  const convenienceFee = selectedSeatDetails.length ? 49 + selectedSeatDetails.length * 12 : 0;
  const grandTotal = ticketSubtotal + convenienceFee;

  useLayoutEffect(() => {
    if (!cardRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 36, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power2.out" }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [title]);

  useEffect(() => {
    const fallbackMovie = title ? getFallbackMovie(title) : null;
    const controller = new AbortController();

    async function fetchMovieDetails() {
      if (!title) {
        setMovie(null);
        setStatus("idle");
        setError("");
        return;
      }

      setError("");

      if (fallbackMovie) {
        setMovie(fallbackMovie);
        setStatus("success");
      } else {
        setMovie(null);
        setStatus("loading");
      }

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(title)}`,
          { signal: controller.signal }
        );
        const data = await response.json();

        if (!response.ok || data.Response === "False") {
          if (fallbackMovie && !controller.signal.aborted) {
            setMovie(fallbackMovie);
            setStatus("success");
          }

          if (!fallbackMovie) {
            throw new Error(data.Error || "Unable to load movie details right now.");
          }

          return;
        }

        if (!controller.signal.aborted) {
          setMovie(mergeMovieDetails(data, fallbackMovie));
          setStatus("success");
        }
      } catch (fetchError) {
        if (controller.signal.aborted) {
          return;
        }

        if (fallbackMovie) {
          setMovie(fallbackMovie);
          setStatus("success");
          return;
        }

        setMovie(null);
        setStatus("error");
        setError(getErrorMessage(fetchError));
      }
    }

    fetchMovieDetails();

    return () => controller.abort();
  }, [title]);

  useEffect(() => {
    setSelectedSeats([]);
    setBookingNotice("");
  }, [title]);

  function handleTheaterChange(theaterId) {
    const nextTheater =
      IMAX_THEATERS.find((theater) => theater.id === theaterId) ?? IMAX_THEATERS[0];

    setSelectedTheaterId(nextTheater.id);
    setSelectedShowtimeId(getDefaultShowtimeId(nextTheater));
    setSelectedSeats([]);
    setBookingNotice("Seats were cleared for the newly selected IMAX auditorium.");
  }

  function handleShowtimeChange(showtimeId) {
    setSelectedShowtimeId(showtimeId);
    setSelectedSeats([]);
    setBookingNotice("Seat selection was reset for the chosen showtime.");
  }

  function handleSeatToggle(seat) {
    if (seat.isBooked) {
      return;
    }

    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats((currentSeats) => currentSeats.filter((seatId) => seatId !== seat.id));
      setBookingNotice("");
      return;
    }

    if (selectedSeats.length >= MAX_SEATS_PER_BOOKING) {
      setBookingNotice(`You can select up to ${MAX_SEATS_PER_BOOKING} seats in one booking.`);
      return;
    }

    setSelectedSeats((currentSeats) => [...currentSeats, seat.id]);
    setBookingNotice("");
  }

  function handleReserveSeats() {
    if (!selectedSeatDetails.length) {
      setBookingNotice("Select at least one seat before continuing to checkout.");
      return;
    }

    if (!currentUser) {
      setBookingNotice("Please sign in with your email from the navbar before confirming seats.");
      return;
    }

    setBookingNotice(
      `${selectedSeatDetails.length} seat${selectedSeatDetails.length > 1 ? "s are" : " is"} being held for 8 minutes at ${activeTheater.name}, ${activeShowtime.label}.`
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.14),transparent_30%)]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10">
          <Link
            className="w-fit rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-red-400 hover:text-red-400"
            to="/"
          >
            Back to homepage
          </Link>

          <div
            ref={cardRef}
            className="overflow-hidden rounded-4xl border border-white/10 bg-zinc-950/80 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            {!title && (
              <div className="p-10">
                <p className="text-2xl font-semibold">Pick a movie to view its details.</p>
                <p className="pt-3 text-zinc-300">
                  The Recommended Movies slider on the homepage now opens this details screen.
                </p>
              </div>
            )}

            {status === "loading" && (
              <div className="grid gap-6 p-10 md:grid-cols-[280px_1fr]">
                <div className="h-[420px] animate-pulse rounded-3xl bg-white/10" />
                <div className="space-y-4">
                  <div className="h-10 w-2/3 animate-pulse rounded-full bg-white/10" />
                  <div className="h-6 w-1/3 animate-pulse rounded-full bg-white/10" />
                  <div className="h-28 animate-pulse rounded-3xl bg-white/10" />
                  <div className="h-14 animate-pulse rounded-3xl bg-white/10" />
                </div>
              </div>
            )}

            {status === "error" && title && (
              <div className="p-10">
                <p className="text-3xl font-semibold">We could not load "{title}"</p>
                <p className="pt-4 text-zinc-300">{error}</p>
              </div>
            )}

            {status === "success" && movie && (
              <>
                <div className="grid gap-8 border-b border-white/10 p-6 lg:grid-cols-[320px_1fr] lg:p-10">
                  <div className="overflow-hidden rounded-3xl bg-zinc-900">
                    {movie.Poster && movie.Poster !== "N/A" ? (
                      <img
                        className="h-full w-full object-cover"
                        src={movie.Poster}
                        alt={movie.Title}
                      />
                    ) : (
                      <div className="flex h-[420px] items-center justify-center text-zinc-400">
                        Poster unavailable
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                      <div className="max-w-3xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-red-400">
                          Movie details
                        </p>
                        <h1 className="pt-2 text-4xl font-semibold xl:text-5xl">{movie.Title}</h1>
                        <p className="pt-3 text-zinc-300">
                          {[
                            formatDetail(movie.Year, "Coming Soon"),
                            formatDetail(movie.Runtime),
                            formatDetail(movie.Rated),
                          ].join(" \u2022 ")}
                        </p>
                      </div>

                      <div className="w-full rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4 xl:max-w-sm">
                        <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/70">
                          Tonight's IMAX plan
                        </p>
                        <p className="pt-3 text-lg font-semibold text-cyan-50">
                          {activeTheater.name}
                        </p>
                        <p className="pt-1 text-sm text-cyan-100/80">
                          {activeTheater.venue} \u2022 {activeTheater.hall}
                        </p>
                        <p className="pt-4 text-sm text-cyan-50">
                          {activeShowtime.label} \u2022 {activeShowtime.note}
                        </p>
                      </div>
                    </div>

                    {movie.__isFallback && (
                      <div className="rounded-2xl border border-amber-300/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
                        External movie details are unavailable for this title, so this page is
                        showing the local information bundled with the app.
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="rounded-full bg-red-500/15 px-4 py-2 text-red-200">
                        IMDb {formatDetail(movie.imdbRating)}
                      </span>
                      <span className="rounded-full bg-white/10 px-4 py-2 text-zinc-200">
                        {formatDetail(movie.Genre)}
                      </span>
                      <span className="rounded-full bg-white/10 px-4 py-2 text-zinc-200">
                        {formatDetail(movie.Language)}
                      </span>
                    </div>

                    <p className="max-w-4xl leading-7 text-zinc-200">
                      {formatDetail(movie.Plot, "Plot unavailable.")}
                    </p>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                          Director
                        </p>
                        <p className="pt-2 text-lg">{formatDetail(movie.Director)}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Cast</p>
                        <p className="pt-2 text-lg">{formatDetail(movie.Actors)}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Writer</p>
                        <p className="pt-2 text-lg">{formatDetail(movie.Writer)}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Awards</p>
                        <p className="pt-2 text-lg">{formatDetail(movie.Awards)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.9fr)] lg:p-10">
                  <section className="space-y-6">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
                            Choose your IMAX theatre
                          </p>
                          <h2 className="pt-2 text-2xl font-semibold">
                            Premium giant-screen auditorium
                          </h2>
                        </div>
                        <p className="text-sm text-zinc-400">
                          Seats reset when you switch theatre or showtime.
                        </p>
                      </div>

                      <div className="mt-5 grid gap-4 xl:grid-cols-2">
                        {IMAX_THEATERS.map((theater) => {
                          const isActive = theater.id === activeTheater.id;

                          return (
                            <button
                              key={theater.id}
                              type="button"
                              onClick={() => handleTheaterChange(theater.id)}
                              className={`rounded-3xl border p-4 text-left transition-all duration-200 ${
                                isActive
                                  ? "border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                                  : "border-white/10 bg-zinc-900/70 hover:border-white/20 hover:bg-zinc-900"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="text-lg font-semibold">{theater.name}</p>
                                  <p className="pt-1 text-sm text-zinc-400">{theater.venue}</p>
                                </div>
                                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                                  {theater.distance}
                                </span>
                              </div>

                              <div className="mt-4 flex flex-wrap gap-2">
                                {theater.amenities.map((amenity) => (
                                  <span
                                    key={amenity}
                                    className="rounded-full bg-white/8 px-3 py-1 text-xs text-zinc-200"
                                  >
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
                            Pick a showtime
                          </p>
                          <h3 className="pt-2 text-xl font-semibold">{activeTheater.hall}</h3>
                        </div>
                        <p className="text-sm text-zinc-400">{activeTheater.venue}</p>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {activeTheater.showtimes.map((showtime) => {
                          const isActive = showtime.id === activeShowtime.id;

                          return (
                            <button
                              key={showtime.id}
                              type="button"
                              onClick={() => handleShowtimeChange(showtime.id)}
                              className={`min-w-36 rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
                                isActive
                                  ? "border-cyan-300/40 bg-cyan-400/12 text-cyan-50"
                                  : "border-white/10 bg-zinc-900/70 text-zinc-200 hover:border-white/20 hover:bg-zinc-900"
                              }`}
                            >
                              <p className="text-base font-semibold">{showtime.label}</p>
                              <p className="pt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                                {showtime.note}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-cyan-400/15 bg-linear-to-b from-cyan-400/8 via-zinc-950 to-zinc-950 p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/70">
                            Select seats
                          </p>
                          <h3 className="pt-2 text-2xl font-semibold">
                            IMAX giant-screen seat map
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-zinc-300">
                            Booked
                          </span>
                          <span className="rounded-full border border-cyan-200/40 bg-cyan-300 px-3 py-1 text-zinc-950">
                            Selected
                          </span>
                          <span className="rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1 text-emerald-100">
                            Accessible
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {Object.entries(SEAT_CATEGORY_META).map(([category, meta]) => (
                          <div
                            key={category}
                            className={`rounded-full px-4 py-2 text-sm ${meta.badgeClass}`}
                          >
                            {category} \u2022 Rs. {meta.price}
                          </div>
                        ))}
                      </div>

                      <div className="mx-auto mt-8 max-w-4xl">
                        <div className="h-4 rounded-full bg-linear-to-r from-cyan-200/20 via-white to-cyan-200/20 shadow-[0_16px_40px_rgba(34,211,238,0.35)]" />
                        <p className="mt-3 text-center text-xs uppercase tracking-[0.55em] text-cyan-100/70">
                          IMAX with Laser Screen
                        </p>
                      </div>

                      <div className="mt-8 overflow-x-auto pb-2">
                        <div className="mx-auto min-w-[860px] max-w-5xl space-y-4">
                          {AUDITORIUM_ROWS.map((row, index) => {
                            const showSectionLabel =
                              index === 0 || AUDITORIUM_ROWS[index - 1].category !== row.category;

                            return (
                              <div key={row.label} className="space-y-2">
                                {showSectionLabel && (
                                  <div className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-white/10" />
                                    <span
                                      className={`rounded-full px-3 py-1 text-xs font-semibold ${SEAT_CATEGORY_META[row.category].badgeClass}`}
                                    >
                                      {row.category} \u2022 Rs. {row.price}
                                    </span>
                                    <div className="h-px flex-1 bg-white/10" />
                                  </div>
                                )}

                                <div className="flex items-center gap-3">
                                  <span className="w-6 text-center text-xs font-semibold text-zinc-500">
                                    {row.label}
                                  </span>

                                  <div className="flex flex-1 items-center justify-center gap-5">
                                    {row.segments.map((segment, segmentIndex) => (
                                      <div key={`${row.label}-${segmentIndex}`} className="flex gap-2">
                                        {segment.map((seat) => {
                                          const isSelected = selectedSeats.includes(seat.id);

                                          return (
                                            <button
                                              key={seat.id}
                                              type="button"
                                              aria-label={`${seat.id} ${seat.category} seat`}
                                              aria-pressed={isSelected}
                                              disabled={seat.isBooked}
                                              onClick={() => handleSeatToggle(seat)}
                                              className={getSeatButtonClasses(seat, isSelected)}
                                            >
                                              {seat.number}
                                            </button>
                                          );
                                        })}
                                      </div>
                                    ))}
                                  </div>

                                  <span className="w-6 text-center text-xs font-semibold text-zinc-500">
                                    {row.label}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </section>

                  <aside className="space-y-6">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
                        Ticket summary
                      </p>
                      <h3 className="pt-2 text-2xl font-semibold">Your booking</h3>

                      <div className="mt-5 space-y-4 text-sm text-zinc-300">
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-zinc-500">Theatre</span>
                          <span className="max-w-56 text-right font-medium text-white">
                            {activeTheater.name}
                          </span>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-zinc-500">Venue</span>
                          <span className="max-w-56 text-right">{activeTheater.venue}</span>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-zinc-500">Showtime</span>
                          <span className="text-right">{activeShowtime.label}</span>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-zinc-500">Seats</span>
                          <span className="max-w-56 text-right">
                            {selectedSeatDetails.length
                              ? selectedSeatDetails.map((seat) => seat.id).join(", ")
                              : "No seats selected"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-zinc-950/80 p-4 text-sm">
                        <div className="flex items-center justify-between text-zinc-300">
                          <span>Tickets</span>
                          <span>Rs. {ticketSubtotal}</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-300">
                          <span>Convenience fee</span>
                          <span>Rs. {convenienceFee}</span>
                        </div>
                        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-base font-semibold text-white">
                          <span>Total</span>
                          <span>Rs. {grandTotal}</span>
                        </div>
                      </div>

                      {bookingNotice && (
                        <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-50">
                          {bookingNotice}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={handleReserveSeats}
                        className="mt-6 w-full rounded-2xl bg-red-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-400"
                      >
                        {selectedSeatDetails.length
                          ? `Lock ${selectedSeatDetails.length} Seat${
                              selectedSeatDetails.length > 1 ? "s" : ""
                            }`
                          : "Select seats to continue"}
                      </button>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
                        Auditorium facts
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                        <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                            Screen
                          </p>
                          <p className="pt-2 text-lg font-semibold">IMAX with Laser</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                            Capacity
                          </p>
                          <p className="pt-2 text-lg font-semibold">{TOTAL_SEAT_COUNT} seats</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                            Booking limit
                          </p>
                          <p className="pt-2 text-lg font-semibold">
                            {MAX_SEATS_PER_BOOKING} seats per order
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                            Best rows
                          </p>
                          <p className="pt-2 text-lg font-semibold">F to J for center view</p>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

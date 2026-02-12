import Footer4 from "./Footer4";

function Footer5() {
  const movieInfo = [
    "Mardaani 3",
    "Border 2",
    "Ranapati Shivray - Swari Agra",
    "Krantijyoti Vidyalay Marathi Madhyam",
    "Vadh 2",
    "Aga Aga Sunbai! Kay Mhantay Sasubai?",
    "Bhabiji Ghar Par Hain!",
    "Lagan Laagii Re",
    "Lagnacha Shot",
    "Marty Supreme",
  ];
  const upcomingMovies = [
    "Upcoming Movies Today",
    "Upcoming Movies Tomorrow",
    "Upcoming Movies This Weekend",
  ];
  const movieGenre = [
    "Drama Movies",
    "Thriller Movies",
    "Action Movies",
    "Comedy Movies",
    "Romantic Movies",
    "Horror Movies",
    "Crime Movies",
    "Crime Movies",
    "Sci-Fi Movies",
    "Sports Movies",
  ];
  const movieLanguage = [
    "Movies in Hindi",
    "Movies in English",
    "Movies in Marathi",
    "Movies in Malayalam",
    "Movies in Japanese",
    "Movies in Gujarati",
    "Movies in Telugu",
    "Movies in Khasi",
    "Movies in Punjabi",
    "Movies in French",
  ];
  const sportsInMumbai = [
    "Boat Race",
    "Horse Race",
    "Kabaddi",
    "Cycling",
    "Running",
    "Cricket",
    "Archery",
    "Tennis",
    "Online Sports",
  ];
  const topEvents = [
    "Events in Mumbai",
    "Events in Delhi-NCR",
    "Events in Chennai",
    "Events in Bengaluru",
    "Events in Hyderabad",
    "Events in Pune",
    "Events in Ahmedabad",
    "Events in Kolkata",
    "Events in Kochi",
  ];
  const absoluteCinema = [
    "Cinemas in Mumbai",
    "Cinemas in Delhi-NCR",
    "Cinemas in Chennai",
    "Cinemas in Hyderabad",
    "Cinemas in Pune",
    "Cinemas in Ahmedabad",
    "Cinemas in Kolkata",
    "Cinemas in Kochi",
  ];
  const topPlays = [
    "Plays in Mumbai",
    "Plays in Delhi-NCR",
    "Plays in Chennai",
    "Plays in Bengaluru",
    "Plays in Pune",
    "Plays in Hyderabad",
    "Plays in Ahmedabad",
    "Plays in Kolkata",
    "Plays in Kochi",
  ];
  const topActivities = [
    "Activities in Mumbai",
    "Activities in Delhi-NCR",
    "Activities in Chennai",
    "Activities in Bengaluru",
    "Activities in Hyderabad",
    "Activities in Pune",
    "Activities in Ahmedabad",
    "Activities in Kolkata",
    "Activities in Kochi",
  ];
  const showingMovies = [
    "Border 2",
    "Mardaani 3",
    "Vadh 2",
    "With Love",
    "Rakkasapuradol",
    "Bhabiji Ghar Par Hain!",
    "Lagan Laagii Re",
    "Mana Shankara Vara Prasad Garu",
    "Adventure of Jetcat 7D - Combo",
    "Euphoria",
  ];
  const countries = ["Indonesia", "Singapore", "Sri Lanka", "West Indies"];
  const help = [
    "About Us",
    "Contact Us",
    "Current Opening",
    "Press Release",
    "Press Coverage",
    "FAQs",
    "Terms and Conditions",
    "Privacy Policy",
  ];
  const exlcusives = [
    "Lollapalooza India",
    "BookAChange",
    "Corporate Vouchers",
    "Gift Cards",
    "List My Show",
    "Offers",
    "Stream",
    "Trailers",
  ];
  return (
    <div>
      <Footer4 renderArray={movieInfo} title={"MOVIES NOW SHOWING IN MUMABI"} />
      <Footer4
        renderArray={upcomingMovies}
        title={"UPCOMING MOVIES PER WEEK"}
      />
      <Footer4 renderArray={movieGenre} title={"Movies By Genre"} />
      <Footer4 renderArray={movieLanguage} title={"Movies By Language"} />
      <Footer4 renderArray={sportsInMumbai} title={"Sports Events in Mumbai"} />
      <Footer4 renderArray={topEvents} title={"Events in Top Cities"} />
      <Footer4 renderArray={absoluteCinema} title={"Cinemas in Top Cities"} />
      <Footer4 renderArray={topPlays} title={"Plays in Top Cities"} />
      <Footer4 renderArray={topActivities} title={"Activities in Top Cities"} />
      <Footer4 renderArray={showingMovies} title={"Movies Now Showing"} />
      <Footer4 renderArray={countries} title={"COUNTRIES"} />
      <Footer4 renderArray={help} title={"HELP"} />
      <Footer4 renderArray={exlcusives} title={"BOOKMYSHOW EXCLUSIVES"} />
    </div>
  );
}

export default Footer5;

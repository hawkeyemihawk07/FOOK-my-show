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
// import Footer4 from "./Pages/Footer4";
import Footer5 from "./Pages/Footer5";
import Footer6 from "./Pages/Footer6";

function Homepage({ setMovie }) {
  return (
    <div className="bg-white  min-h-screen w-full select-none">
      <Navbar />
      <Featurebar />
      <Slider />
      <Herosection2 setMovie={setMovie} />
      <Midsection />
      <Bottomsection />
      {/* <Bento2 /> */}
      <Footer />
      <Footer2 />
      <Footer3 />
      <Footer5 />
      <Footer6 />
    </div>
  );
}

export default Homepage;

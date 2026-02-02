import Slider2 from "./Slider2";
import SliderCrousel from "./sliderCrousel";

function Bottomsection() {
  // const large = "h-88";
  //   const medium = "h-44";
  const musicStudio = [
    {
      title: "John Mayer Solo - Live In Mumbai, 2026",
      location: "Mahalaxmi Race Course: Mumbai",
      genre: "Concerts",
      Imglink: "src/Music Studio/et00464841-dunvslyxks-portrait.avif",
    },
    {
      title: "Anuv Jain - Dastakhat India Tour (Mumbai)",
      location: "DOME, SVP Stadium: Mumbai",
      genre: "Concert",
      Imglink: "src/Music Studio/et00470487-zafmuswmjf-portrait.avif",
    },
    {
      title: "Sanam India Tour - Mumbai",
      location: "South Sky, Jio World Drive: Mumbai",
      genre: "Concert",
      Imglink: "src/Music Studio/Sanam.avif",
    },
    {
      title: "Keinemusik - Live in Mumbai",
      location: "Mahalaxmi Race Course: Mumbai",
      genre: "Concert",
      Imglink: "src/Music Studio/et00467697-bxhrluvxvg-portrait.avif",
    },
    {
      title: "Sama'a: Festival of Sufi Music - Day 3",
      location: "Tata Theatre: NCPA",
      genre: "Concert",
      Imglink: "src/Music Studio/et00480910-lfubnjgrkt-portrait.avif",
    },
    {
      title: "CALVIN HARRIS - Live in Mumbai",
      location: "Infinity Bay: Mumbai",
      genre: "Concert",
      Imglink: "src/Music Studio/et00462236-cdzpljvsnn-portrait.avif",
    },
    {
      title: "Sounds Good Festival",
      location: "Nesco Center - Goregaon: Mumbai",
      genre: "Concert",
      Imglink: "src/Music Studio/Sounds good.avif",
    },
    {
      title: "SOI Spring 2026 Season: Brabbins/Connolly",
      location: "Jamshed Bhabha Theatre: NCPA.",
      genre: "Concert",
      Imglink: "src/Music Studio/Symphony.avif",
    },
    {
      title: "Paradox presents Nico Moreno",
      location: "Nesco Center - Goregaon: Mumbai",
      genre: "Concert",
      Imglink: "src/Music Studio/Paradox.avif",
    },
    {
      title: "Manoj Muntashir's Krishna - Radha Se Ranbhumi Tak",
      location: "The Grand Theatre, NMACC",
      genre: "Concert",
      Imglink: "src/Music Studio/Krishna.avif",
    },
  ];
  const outdoorEvents = [
    {
      title: "Alibag Beach Camping By Happy Event Management",
      location: "Alibag Beach Camping: Alibaug",
      Imglink: "src/OutdoorEvents/Alibuag.avif",
    },
    {
      title: "Humare Ram at The Grand Theatre, NMACC",
      location: "The Grand Theatre, NMACC",
      Imglink: "src/OutdoorEvents/Ramayan.avif",
    },
    {
      title: "Fountain of Joy - Dhirubhai Ambani Square",
      location: "Dhirubhai Ambani Square: Mumbai",
      Imglink: "src/OutdoorEvents/Ambani.avif",
    },
    {
      title: "INDIA vs SOUTH AFRICA - WARM-UP MATCH",
      location: "D.Y. Patil Stadium: Navi Mumbai",
      Imglink: "src/OutdoorEvents/IndvsSouthAfrica.avif",
    },
    {
      title: "Daily Ka Kaam Hai By Aakash Gupta - Mumbai  ",
      location: "Sophia Bhabha Auditorium: Mumbai",
      Imglink: "src/OutdoorEvents/Aaksh gupta.avif",
    },
    {
      title: "INDIA A vs USA - WARM-UP MATCH  ",
      location: "D.Y. Patil Stadium: Navi Mumbai",
      Imglink: "src/OutdoorEvents/ind  vs usa.avif",
    },
    {
      title: "Sangeet Devbabhali ",
      location: "Dinanath Mangeshkar Natyagruha: Vile Parle",
      Imglink: "src/OutdoorEvents/dev.avif",
    },
    {
      title: "The Gypsy Travel Festival  ",
      location: "Jio World Drive: Mumbai",
      Imglink: "src/OutdoorEvents/weekend.avif",
    },
    {
      title: "Kanan Gill Live ",
      location: "Bal Gandharva Rang Mandir: Mumbai",
      Imglink: "src/OutdoorEvents/Kannan gill.avif",
    },
    {
      title: "Gaurav Kapoor LIVE ",
      location: "Sophia Bhabha Auditorium: Mumbai",
      Imglink: "src/OutdoorEvents/Gaurav gupta.avif",
    },
  ];
  return (
    <div className="h-fit w-full flex flex-col justify-center  items-center">
      <SliderCrousel movieInfo={musicStudio} genre={"Your Music Studio"} />
      <SliderCrousel movieInfo={outdoorEvents} genre={"Outdoor Events"} />
    </div>
  );
}
export default Bottomsection;

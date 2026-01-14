function Midsection() {
  return (
    <div className="bg-[#2b3148] flex justify-center items-center  h-fit pt-11 w-full">
      <div className="w-[80%] flex flex-col gap-10 h-fit">
        <img
          className="px-24"
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
          alt=""
        />

        <div className="flex flex-col gap-2 px-24 ">
          <div className="text-white font-semibold">
            <h2>Premiers</h2>
            <h3>Brand new releases every Friday</h3>
          </div>
          <div className="flex gap-10 ">
            {[
              {
                src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00423962-nrsajdldly-portrait.jpg",
                title: "What We Wanted to Be",
                language: "Spanish",
              },
              {
                src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00438906-ljwyevwczp-portrait.jpg",
                title: "The Things You Kill",
                language: "English",
              },
              {
                src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00479213-txztkaytfy-portrait.jpg",
                title: "The Travellers",
                language: "English",
              },
              {
                src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00478731-jvhlzprqkr-portrait.jpg",
                title: "Nuclear Now",
                language: "Turkish",
              },
            ].map((movie) => (
              <div
                className="flex text-white text-xl flex-col  gap-1 "
                key={movie.title}
              >
                <img className="h-96" src={movie.src} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.language}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Midsection;

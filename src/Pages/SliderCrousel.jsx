import Slider2 from "./Slider2";

function SliderCrousel({ genre, movieInfo }) {
  return (
    <div className="w-[80%] h-fit flex flex-col">
      <div className="flex mt-6  items-center h-auto w-[80%]  justify-between">
        <h3 className="font-bold px-40 text-2xl">{genre} </h3>
        <div className="text-red-500">See All&#x2978;</div>
      </div>
      <Slider2 movieInfo={movieInfo} />
    </div>
  );
}

export default SliderCrousel;

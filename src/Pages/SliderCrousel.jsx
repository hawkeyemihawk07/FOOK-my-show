import Slider2 from "./Slider2";

function SliderCrousel({ genre, movieInfo }) {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold sm:text-2xl">{genre}</h3>
          <div className="cursor-pointer text-sm font-medium text-red-500 sm:text-base">
            See All&#x2978;
          </div>
        </div>
      </div>
      <Slider2 movieInfo={movieInfo} />
    </section>
  );
}

export default SliderCrousel;

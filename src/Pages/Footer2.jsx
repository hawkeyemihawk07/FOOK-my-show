import { resolveAsset } from "../utils/resolveAsset";

function Footer2() {
  return (
    <div className="w-full bg-[#333333] px-4 py-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-white lg:flex-row lg:items-center">
        <div className="flex items-start gap-4">
          <img
            className="mt-1 h-7"
            src={resolveAsset("src/assets/home.svg")}
            alt="List your show"
          />
          <div>
            <div className="font-bold text-lg">List your Show</div>
            <div className="pt-1 text-sm text-zinc-200 sm:text-base">
              Got a show, event, activity or a great experience? Partner with us
              and get listed on BookMyShow.
            </div>
          </div>
        </div>

        <div className="lg:ml-auto">
          <button className="flex w-full cursor-pointer justify-center rounded-lg bg-[#dc354b] p-3 font-bold sm:w-auto">
            Contact today!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer2;

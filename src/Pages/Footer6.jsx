import { resolveAsset } from "../utils/resolveAsset";

function Footer6() {
  const socialLogos = [
    { name: "Facebook", src: "src/assets/facebook.svg" },
    { name: "Twitter X", src: "src/assets/twitter-x.svg" },
    { name: "Instagram", src: "src/assets/instagram.svg" },
    { name: "YouTube", src: "src/assets/youtube.svg" },
    { name: "Pinterest", src: "src/assets/pinterest.svg" },
    { name: "LinkedIn", src: "src/assets/linkedin.svg" },
  ];

  return (
    <footer className="w-full bg-[#2f2f2f] text-zinc-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex w-full items-center gap-4 sm:gap-6">
          <div className="h-px flex-1 bg-zinc-600" />
          <div className="rounded-full bg-white px-5 py-3 shadow-sm">
            <img
              className="h-10 w-auto object-contain"
              src={resolveAsset("src/assets/bookmyshow-logo.svg")}
              alt="BookMyShow"
            />
          </div>
          <div className="h-px flex-1 bg-zinc-600" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-600 bg-zinc-800/80 transition-colors hover:border-zinc-400 hover:bg-zinc-700"
              aria-label={logo.name}
              title={logo.name}
            >
              <img
                className="h-4 w-4 object-contain opacity-90"
                src={resolveAsset(logo.src)}
                alt={logo.name}
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl space-y-3 text-center text-xs leading-6 text-zinc-500 sm:text-sm">
          <p>Copyright 2026 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
          <p>
            The content and images used on this site are copyright protected and vest with the
            respective owners. Their usage here is only to promote the work, and no endorsement of
            the artist should be implied. Unauthorized use is prohibited and punishable by law.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer6;

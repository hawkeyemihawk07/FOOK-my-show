function Footer6() {
  const logos = [
    "facebook",
    "twitter-x",
    "instagram",
    "youtube",
    "pinterest",
    "linkedin",
  ];
  return (
    <div>
      <div className="w-full bg-[#333333] flex items-center py-14">
        <div className="w-[48%] h-0.5  bg-zinc-600 "></div>
        <div>
          <img className="px-6" src="IMG/logo.svg" alt="" />
        </div>
        <div className="w-[48%] h-0.5  bg-zinc-600 "></div>
      </div>
      <div className="bg-[#333333] w-full flex items-center justify-center gap-4">
        {logos.map((logo) => (
          <img
            className="h-9 bg-white rounded-xl  cursor-pointer hover:text-zinc-400"
            src={`/src/assets/${logo}.svg`}
            key={logo}
            alt="logo"
          />
        ))}
      </div>
      <div className="bg-[#333333] text-zinc-600 text-xs flex flex-col items-center p-4 w-full">
        <p>
          Copyright 2026 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </p>
        <p className=" ">
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is
          prohibited and punishable by law.
        </p>
      </div>
    </div>
  );
}

export default Footer6;

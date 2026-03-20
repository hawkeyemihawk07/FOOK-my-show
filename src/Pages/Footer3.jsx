import { resolveAsset } from "../utils/resolveAsset";

function Footer3() {
  const info = [
    { src: "support_agent.svg", label: "24/7 CUSTOMER CARE" },
    {
      src: "confirmation_number_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
      label: "RESEND BOOKING CONFIRMATION",
    },
    {
      src: "mail_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
      label: "SUBSCRIBE TO THE NEWSLETTER",
    },
  ];
  return (
    <div className="grid w-full grid-cols-1 gap-6 bg-[#404040] px-4 py-6 text-sm text-zinc-300 sm:grid-cols-3">
      {info.map((feature) => (
        <div
          className="flex h-fit w-full flex-col items-center justify-center gap-3 px-2 text-center hover:text-white"
          key={feature.label}
        >
          <img
            className="h-14 hover:text-white"
            src={resolveAsset(`src/assets/${feature.src}`)}
            alt={feature.label}
          />
          <p>{feature.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer3;

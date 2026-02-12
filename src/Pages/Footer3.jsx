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
    <div className="bg-[#404040] flex gap-40 text-zinc-300  text-sm items-center justify-center h-28 w-full">
      {info.map((feature) => (
        <div
          className="h-fit hover:text-white w-fit flex flex-col justify-center items-center"
          key={feature.label}
        >
          <img
            className="h-14 hover:text-white"
            src={`src/assets/${feature.src} `}
            alt=""
          />
          <p>{feature.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer3;

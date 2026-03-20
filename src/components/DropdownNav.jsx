import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { resolveAsset } from "../utils/resolveAsset";

function DropdownNav({ setDown }) {
  const [showAllCities, setShowAllCities] = useState(false);
  const toggleButtonRef = useRef(null);
  const toggleTextRef = useRef(null);
  const toggleIconRef = useRef(null);
  const allCitiesPanelRef = useRef(null);
  const allCityRefs = useRef([]);

  const handleCityHover = (event, isHovering) => {
    const card = event.currentTarget;
    const image = card.querySelector("[data-city-image]");
    const title = card.querySelector("[data-city-title]");

    gsap.to(card, {
      backgroundColor: isHovering ? "rgba(239, 246, 255, 0.95)" : "transparent",
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(image, {
      y: isHovering ? -6 : 0,
      scale: isHovering ? 1.08 : 1,
      filter: isHovering
        ? "drop-shadow(0 12px 20px rgba(59, 130, 246, 0.45)) brightness(1.05) saturate(1.2)"
        : "drop-shadow(0 0 0 rgba(59, 130, 246, 0)) brightness(1) saturate(1)",
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(title, {
      color: isHovering ? "#2563eb" : "#18181b",
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const cities = [
    { src: "src/components/Imgs/mumbai-selected.png", title: "Mumbai" },
    { src: "src/components/Imgs/koch.avif", title: "Kochi" },
    { src: "src/components/Imgs/pune.png", title: "Pune" },
    { src: "src/components/Imgs/hyd.png", title: "Hydrabad" },
    { src: "src/components/Imgs/bengluru.avif", title: "Bengluru" },
    { src: "src/components/Imgs/ahd.avif", title: "Ahemdabad" },
    { src: "src/components/Imgs/kolk.avif", title: "Kolkata" },
    { src: "src/components/Imgs/Delhi NCR.avif", title: "DelhiNCR" },
    { src: "src/components/Imgs/chd.avif", title: "Chandigaragh" },
    { src: "src/components/Imgs/chen.avif", title: "Chennai" },
  ];

  const moreCities = [
    "Agra",
    "Ahmedabad",
    "Ajmer",
    "Aligarh",
    "Amritsar",
    "Aurangabad",
    "Bareilly",
    "Belagavi",
    "Bengaluru",
    "Bhopal",
    "Bhubaneswar",
    "Bilaspur",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Cuttack",
    "Dehradun",
    "Delhi NCR",
    "Dhanbad",
    "Faridabad",
    "Ghaziabad",
    "Goa",
    "Gorakhpur",
    "Guntur",
    "Guwahati",
    "Gwalior",
    "Hubli",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Jalandhar",
    "Jammu",
    "Jamshedpur",
    "Jodhpur",
    "Kanpur",
    "Kochi",
    "Kolkata",
    "Kota",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Mangaluru",
    "Meerut",
    "Mumbai",
    "Mysuru",
    "Nagpur",
    "Nashik",
    "Noida",
    "Patna",
    "Pune",
    "Raipur",
    "Rajkot",
    "Ranchi",
    "Surat",
    "Siliguri",
    "Thane",
    "Tirupati",
    "Trichy",
    "Udaipur",
    "Vadodara",
    "Varanasi",
    "Vijayawada",
    "Visakhapatnam",
    "Warangal",
  ];

  useLayoutEffect(() => {
    if (!allCitiesPanelRef.current) {
      return;
    }

    gsap.set(allCitiesPanelRef.current, {
      height: 0,
      autoAlpha: 0,
      display: "none",
    });
  }, []);

  useLayoutEffect(() => {
    const panel = allCitiesPanelRef.current;
    const items = allCityRefs.current.filter(Boolean);
    const button = toggleButtonRef.current;
    const label = toggleTextRef.current;
    const icon = toggleIconRef.current;

    if (!panel || !button || !label || !icon) {
      return;
    }

    gsap.killTweensOf([panel, button, label, icon, ...items]);

    if (showAllCities) {
      gsap.set(panel, { display: "block" });
      gsap.fromTo(
        panel,
        { height: 0, autoAlpha: 0 },
        {
          height: "auto",
          autoAlpha: 1,
          duration: 0.45,
          ease: "power2.out",
          overwrite: "auto",
        }
      );

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 16, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          stagger: 0.02,
          ease: "power2.out",
          delay: 0.12,
          overwrite: "auto",
        }
      );
    } else {
      gsap.to(items, {
        autoAlpha: 0,
        y: -10,
        duration: 0.16,
        stagger: { each: 0.004, from: "end" },
        ease: "power1.in",
        overwrite: "auto",
      });

      gsap.to(panel, {
        height: 0,
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.inOut",
        overwrite: "auto",
        onComplete: () => gsap.set(panel, { display: "none" }),
      });
    }

    gsap.to(button, {
      backgroundColor: showAllCities ? "#eff6ff" : "transparent",
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(label, {
      color: showAllCities ? "#2563eb" : "#dc2626",
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(icon, {
      rotate: showAllCities ? 180 : 0,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [showAllCities]);

  const handleToggleCities = () => {
    gsap.fromTo(
      toggleButtonRef.current,
      { scale: 1 },
      {
        scale: 0.98,
        duration: 0.1,
        repeat: 1,
        yoyo: true,
        ease: "power1.out",
      }
    );

    setShowAllCities((value) => !value);
  };

  return (
    <div
      onClick={() => setDown(false)}
      className="fixed inset-0 z-50 flex justify-center bg-black/60 px-4 py-6 md:pt-20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[85vh] w-full max-w-5xl flex-col overflow-y-auto rounded-lg bg-white"
      >
        <div className="relative flex w-full p-3.5">
          <img
            className="pointer-events-none absolute left-6 top-1/2 h-5 -translate-y-1/2"
            src={resolveAsset("src/assets/search.svg")}
            alt="search"
          />
          <input
            className="h-12 w-full rounded-lg border border-zinc-400 px-10 outline-none"
            type="text"
            placeholder=" Search for your cities"
          />
        </div>
        <div className="flex items-center px-4 gap-2.5 text-red-700 shadow-zinc-200 shadow-sm">
          <img
            className="h-4"
            src={resolveAsset("src/assets/Location.svg")}
            alt="location"
          />
          <p>Detect my location</p>
        </div>
        <div className="flex justify-center items-center p-4">
          <p>popular cities</p>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-4 px-4 pb-4">
          {cities.map((city) => (
            <div
              key={city.title}
              onMouseEnter={(event) => handleCityHover(event, true)}
              onMouseLeave={(event) => handleCityHover(event, false)}
              className="flex cursor-pointer items-center rounded-xl px-3 py-2 flex-col"
            >
              <img
                data-city-image
                className="h-fit will-change-transform"
                src={city.src}
                alt={city.title}
              />
              <p data-city-title className="px-2 text-zinc-900">
                {city.title}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-200 px-4 py-3">
          <button
            type="button"
            ref={toggleButtonRef}
            onClick={handleToggleCities}
            className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-red-600"
          >
            <span ref={toggleTextRef} className="font-semibold">
              {showAllCities ? "Hide cities" : "View all cities"}
            </span>
            <img
              ref={toggleIconRef}
              className="h-3 w-3"
              src={resolveAsset("src/assets/Downarrow.svg")}
              alt="toggle all cities"
            />
          </button>

          <div ref={allCitiesPanelRef} className="overflow-hidden">
            <div className="border-t border-zinc-100 pt-4">
              <p className="pb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
                More..... all cities in India
              </p>
              <div className="grid grid-cols-2 gap-2 pb-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {moreCities.map((city, index) => (
                  <button
                    type="button"
                    key={city}
                    ref={(element) => {
                      allCityRefs.current[index] = element;
                    }}
                    className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-left text-sm text-zinc-700 transition-colors hover:border-blue-300 hover:text-blue-700"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownNav;

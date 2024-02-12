"use client";
import { Location } from "@/app/lib/enums";
import Image from "next/image";
import { useEffect } from "react";

/**
 * This component is used to help smoothen the transition between pages.
 * Previously, there was kind of a flash as the images loaded one by one
 * Now I load all the images at once and use Javascript to update which one
 * is visible after the application has been mounted. */

export default function SplashImage({
  location = Location.Rome,
}: {
  location?: Location;
}) {
  useEffect(() => {
    const img = document.getElementById(location);
    if (!img) return;
    img.classList.add("opacity-100");
    img.classList.remove("opacity-0");
    return () => {
      img.classList.add("opacity-0");
      img.classList.remove("opacity-100");
    };
  }, [location]);

  const basePath = "/steven-develops";
  return (
    <div className="">
      {/* <Image
        src={`${basePath}/images/rome-optimized.jpg`}
        fill={true}
        alt="Steven Brown in Rome, Italy"
        className="z-0 opacity-0 fade-transition max-h-screen shadow-md"
        id="rome"
      />
      <Image
        src={`${basePath}/images/garda-optimized.jpg`}
        fill={true}
        alt="Garda, Italy"
        className="-z-10 opacity-0 fade-transition max-h-screen shadow-md"
        id="garda"
      />
      <Image
        src={`${basePath}/images/campaignia-optimized.jpg`}
        fill={true}
        alt="Campaignia, Italy"
        className="-z-10 opacity-0 fade-transition max-h-screen shadow-md"
        id="campaignia"
      />
      <div className="absolute -z-10 inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-200 to-transparent via-stone-300 pointer-events-none"></div> */}
    </div>
  );
}

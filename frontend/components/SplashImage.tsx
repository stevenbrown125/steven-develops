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
  }, []);

  return (
    <>
      <Image
        src="/images/rome-optimized.jpg"
        fill={true}
        alt="Steven Brown in Rome, Italy"
        className="-z-10 opacity-0 fade-transition"
        id="rome"
      />
      <Image
        src="/images/garda-optimized.jpg"
        fill={true}
        alt="Garda, Italy"
        className="-z-10 opacity-0 fade-transition"
        id="garda"
      />
      <Image
        src="/images/campaignia-optimized.jpg"
        fill={true}
        alt="Campaignia, Italy"
        className="-z-10 opacity-0 fade-transition"
        id="campaignia"
      />
    </>
  );
}

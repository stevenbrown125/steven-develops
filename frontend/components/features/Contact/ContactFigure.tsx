// File: /components/features/Contact/ContactFigure.tsx

import Figure from "@/components/core/Figure/Figure";

export default function ContactFigure() {
  return (
    <Figure
      figure={{
        href: "/images/rome-optimized.jpg",
        alt: "Rome, Italy 2020",
        classes: "2xl:mt-6 opacity-80 relative z-10 vertical-hr md:ml-6",
      }}
    />
  );
}

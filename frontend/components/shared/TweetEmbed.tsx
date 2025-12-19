// apps/marketing/components/TweetEmbed.tsx
"use client";

import { useEffect, useRef } from "react";

interface TweetEmbedProps {
  id: string;
}

export function TweetEmbed({ id }: TweetEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!(window as any).twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window as any).twttr.widgets.load(ref.current);
    }
  }, []);

  return (
    <div ref={ref} className="my-8 flex justify-center">
      <blockquote className="twitter-tweet">
        <a href={`https://twitter.com/Dev4TheWeb/status/${id}`} />
      </blockquote>
    </div>
  );
}

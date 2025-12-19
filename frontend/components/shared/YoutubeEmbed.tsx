// apps/marketing/components/YouTubeEmbed.tsx
"use client";

interface YouTubeEmbedProps {
  id: string;
  title?: string;
}

export function YouTubeEmbed({
  id,
  title = "YouTube video",
}: YouTubeEmbedProps) {
  return (
    <div className="my-8 flex justify-center">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

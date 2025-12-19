// lib/blogNavigation.ts

import { BlogTimelineItem } from "./blogTimeline";

export function getAdjacentTimelineItems(
  timeline: BlogTimelineItem[],
  slug: string
) {
  const index = timeline.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: timeline[index + 1] ?? null,
    next: timeline[index - 1] ?? null,
  };
}

// lib/blogTimeline.ts

import { ExcerptPost, Post } from "@/types";
import { getAllBlogPostsData, getAllExcerptData } from "@/lib/mdx-utils";

export type BlogTimelineItem =
  | ({ kind: "blog" } & Post)
  | ({ kind: "excerpt" } & ExcerptPost);

export async function getBlogTimeline(): Promise<BlogTimelineItem[]> {
  const [posts, excerpts] = await Promise.all([
    getAllBlogPostsData(),
    getAllExcerptData(),
  ]);

  const timeline: BlogTimelineItem[] = [
    ...posts.map((p) => ({ ...p, kind: "blog" as const })),
    ...excerpts.map((e) => ({ ...e, kind: "excerpt" as const })),
  ];

  timeline.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return timeline;
}

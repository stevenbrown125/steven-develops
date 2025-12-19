// /components/features/Blog/PostNavigation.tsx
import PostNavCard from "./PostNavCard";
import { BlogTimelineItem } from "@/lib/blogTimeline";

interface Props {
  prev: BlogTimelineItem | null;
  next: BlogTimelineItem | null;
}

const PostNavigation: React.FC<Props> = ({ prev, next }) => {
  if (!prev && !next) return null;

  return (
    <section className="pt-4">
      <div className="grid gap-4 md:grid-cols-2">
        {next && <PostNavCard post={next} type="next" />}
        {prev && <PostNavCard post={prev} type="prev" />}
      </div>
    </section>
  );
};

export default PostNavigation;

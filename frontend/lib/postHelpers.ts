import { Post } from "@/types"

export const groupPostsByYears = (posts: Post[]) =>
  posts.reduce((acc, post) => {
    const year = new Date(post.publishedAt).getFullYear()
    if (!acc.has(year)) {
      acc.set(year, [])
    }
    const yearPosts = acc.get(year)
    if (yearPosts) {
      yearPosts.push(post)
    }
    return acc
  }, new Map<number, Post[]>())

export const sortPostYears = (posts: Map<number, Post[]>) =>
  Array.from(posts.keys()).sort((a, b) => b - a)

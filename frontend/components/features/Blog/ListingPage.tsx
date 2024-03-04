import { sortPostYears } from "@/lib/postHelpers"
import { Post } from "@/types"
import PostGrid from "./PostGrid"
import Breadcrumbs, {
  BreadcrumbLink,
} from "@/components/shared/utilities/Breadcrumb"
import ListingHeader from "@/components/shared/utilities/ListingHeader"

interface ListingPageProps {
  title: string
  breadcrumbs: BreadcrumbLink[]
  groupedPosts: Map<number, Post[]>
  isReversed: boolean
}
const ListingPage: React.FC<ListingPageProps> = ({
  title,
  breadcrumbs,
  groupedPosts,
  isReversed,
}) => {
  const sortedYears = isReversed
    ? sortPostYears(groupedPosts).reverse()
    : sortPostYears(groupedPosts)
  return (
    <div className="relative flex-grow px-4 py-4 mx-auto max-w-7xl lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ListingHeader title={title} isAscending={isReversed} />
      {sortedYears.map((year) => {
        const posts = groupedPosts.get(year)
        if (posts) {
          return (
            <div key={year} className="relative">
              <h3 className="pl-2 mt-2 text-xl font-bold dark:text-zinc-400">
                {year}
              </h3>
              <PostGrid posts={posts} />
            </div>
          )
        } else return <></>
      })}
    </div>
  )
}

export default ListingPage

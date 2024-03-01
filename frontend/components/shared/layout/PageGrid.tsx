import { ReactNode } from "react"

interface PageGridProps {
  title: string
  children: ReactNode
}

const PageGrid = ({ title, children }: PageGridProps) => {
  if (!children) return <></>
  return (
    <div className="relative flex-grow mx-auto max-w-screen-2xl animate-fade-in-slide-down">
      <h2 className="heading-hr">{title}</h2>
      <section
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 lg:gap-6"
        itemScope
        itemType="http://schema.org/ItemList"
      >
        {children}
      </section>
    </div>
  )
}

export default PageGrid

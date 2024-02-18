import { Category } from "@/types/Category"
import { Tag } from "@/types/Tag"

interface SEOData {
    title: string,
    description: string,
    keywords: string,
    canonical?: string,
    og: OpenGraphData,
    twitter: TwitterData
}

interface OpenGraphData {
    title: string,
    description: string,
    image: string,
    url: string,
}

interface TwitterData {
    card: string
    title: string,
    description: string,
    image: string
}

const siteMetaData = {
    title: 'Steven Develops',
    description: 'Showing off the latest and greatest of Steven Brown.',
    baseUrl: 'https://stevendevelops.com/',
    keywords: 'software, development, engineering, coding'
}

const defaultImage = 'https://cdn.sanity.io/images/i80c8qr5/production/2bfbc23a44210efd9272ddf20c69847e0fb55cc7-6000x4000.jpg'

const generatePageTitle = (title: string): string => `${title} | ${siteMetaData.title}`

const defaultDescription = () => siteMetaData.description

const generateOpenGraphData = (title: string, slug: string, description: string, image: string) => {
    return {
        title: `${title} | ${siteMetaData.title}`,
        description: description,
        image: image,
        url: `${siteMetaData.baseUrl}${slug}`,
    }
}

const generateTwitterData = (title: string, description: string, image: string) => {
    return {
        card: 'summary_large_image',
        title: `${title} | ${siteMetaData.title}`,
        description: description,
        image
    }
}

const generateKeywords = (keywords: string) => `${keywords}, ${siteMetaData.keywords}`

/* Tag Listing Page */

export const generateTagListingSEOData = (tag: Tag, image: string = defaultImage): SEOData => {
    const title = generatePageTitle(`${tag.title} Posts`)
    const description = `Discover articles tagged under ${tag.title} and join in the discussion as we explore various aspects of technology.`
    const keywords = generateKeywords(`${tag.title.toLowerCase()}`)
    const slug = `/blog/tags/${tag.slug}`
    const og = generateOpenGraphData(title, slug, description, image);
    const twitter = generateTwitterData(title, description, image)

    return {
        title,
        description,
        keywords,
        og,
        twitter
    }
}

/* Category Listing Page */

export const generateCategoryListingSEOData = (category: Category, image: string = defaultImage): SEOData => {
    const title = generatePageTitle(`${category.title} Posts`)
    const description = `Discover articles in our ${category.title} category and join in the discussion as we explore various aspects of technology.`
    const keywords = generateKeywords(`${category.title.toLowerCase()}`)
    const slug = `/blog/categories/${category.slug}`
    const og = generateOpenGraphData(title, slug, description, image);
    const twitter = generateTwitterData(title, description, image)

    return {
        title,
        description,
        keywords,
        og,
        twitter
    }
}

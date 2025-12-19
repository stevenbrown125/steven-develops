// File: /utils/seo.ts

import type { Metadata } from "next";
import config from "./config";

export interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  robots?: string;
  applicationName?: string;
  verification?: { google?: string; yandex?: string; bing?: string };
  twitterCardType?: "summary" | "summary_large_image";
  keywords?: readonly string[];
  jsonLd?: readonly Record<string, any>[];
}

export interface SEOResult {
  metadata: Metadata;
  jsonLd: readonly Record<string, any>[];
}

const siteMetaData = {
  name: config.title,
  description: config.description,
  baseUrl: config.website,
  email: config.email,
  keywords: [
    "software engineer",
    "frontend engineer",
    "typescript",
    "react",
    "next.js",
    "web development",
    "accessibility",
    "performance",
    "security",
  ] as const,
  social: {
    twitter: config.social.twitter,
    linkedin: config.social.linkedin,
    github: config.social.github,
  },
  twitterHandle: "@Dev4TheWeb",
};

const defaultImage = `${config.website}${config.seo.image}`;

export function generateSEO(props: SEOProps): SEOResult {
  const {
    title,
    description,
    url,
    image = defaultImage,
    robots = "index, follow",
    applicationName = siteMetaData.name,
    verification,
    twitterCardType = "summary_large_image",
    keywords = [],
    jsonLd = [],
  } = props;

  const fullUrl = `${siteMetaData.baseUrl}${url}`;
  const pageTitle =
    title === siteMetaData.name ? title : `${title} | ${siteMetaData.name}`;

  return {
    metadata: {
      title: pageTitle,
      description,
      robots,
      applicationName,
      verification,
      keywords: [...keywords, ...siteMetaData.keywords],
      alternates: {
        canonical: fullUrl,
      },
      openGraph: {
        title: pageTitle,
        description,
        url: fullUrl,
        siteName: siteMetaData.name,
        type: "website",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: pageTitle,
          },
        ],
      },
      twitter: {
        card: twitterCardType,
        title: pageTitle,
        description,
        images: [image],
        creator: siteMetaData.twitterHandle,
      },
    },
    jsonLd,
  };
}

export const seoContent = {
  home: {
    title: "Senior Software Engineer",
    description:
      "Senior software engineer focused on building secure, performant, accessible, and intuitive web applications with TypeScript, React, and Next.js.",
    url: "/",
    image: defaultImage,
    keywords: [
      "steven brown",
      "senior software engineer",
      "frontend architecture",
      "web performance",
      "accessibility",
      "secure applications",
      "react developer",
      "next.js developer",
      "typescript engineer",
      "software portfolio",
      "technical blog",
    ] as const,
    twitterCardType: "summary_large_image",

    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${config.website}/#website`,
        name: config.title,
        url: config.website,
        inLanguage: "en-US",
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${config.website}/#person`,
        name: "Steven Brown",
        url: config.website,
        image: defaultImage,
        jobTitle: "Senior Software Engineer",
        email: siteMetaData.email,
        description:
          "Senior software engineer specializing in frontend architecture, performance optimization, accessibility, and secure application development.",
        knowsAbout: [
          "TypeScript",
          "React",
          "Next.js",
          "Frontend Architecture",
          "Web Performance",
          "Accessibility",
          "Security",
        ],
        sameAs: [
          siteMetaData.social.github,
          siteMetaData.social.linkedin,
          siteMetaData.social.twitter,
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${config.website}/#webpage`,
        url: config.website,
        name: "Home",
        description:
          "Personal site of Steven Brown showcasing software engineering work, technical writing, skills, and professional experience.",
        isPartOf: {
          "@id": `${config.website}/#website`,
        },
        about: {
          "@id": `${config.website}/#person`,
        },
        primaryImageOfPage: defaultImage,
        mainEntity: {
          "@type": "Person",
          "@id": `${config.website}/#person`,
        },
      },
    ],
  },

  blog: {
    title: "Blog",
    description:
      "Technical articles and engineering notes by Steven Brown covering TypeScript, React, Next.js, performance, accessibility, and real-world software architecture.",
    url: "/blog",
    image: `${config.website}${config.seo.image}`,
    keywords: [
      "software engineering blog",
      "typescript blog",
      "react blog",
      "next.js blog",
      "web performance",
      "accessibility",
      "frontend architecture",
      "technical writing",
      "programming articles",
    ] as const,
    twitterCardType: "summary_large_image",

    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${config.website}/blog#blog`,
        name: "Steven Develops Blog",
        url: `${config.website}/blog`,
        description:
          "A collection of technical articles by Steven Brown on modern software engineering and frontend development.",
        inLanguage: "en-US",
        author: {
          "@type": "Person",
          "@id": `${config.website}/#person`,
        },
        publisher: {
          "@type": "Person",
          "@id": `${config.website}/#person`,
        },
        isPartOf: {
          "@id": `${config.website}/#website`,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${config.website}/blog#webpage`,
        url: `${config.website}/blog`,
        name: "Blog",
        description:
          "Browse all blog posts written by Steven Brown about software engineering, frontend development, and professional experience.",
        isPartOf: {
          "@id": `${config.website}/#website`,
        },
        about: {
          "@id": `${config.website}/#person`,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Blog",
              item: `${config.website}/blog`,
            },
          ],
        },
      },
    ],
  },
  blogCategories: {
    title: "Blog Categories",
    description:
      "Browse all blog categories on Steven Develops. Explore posts organized by topic, covering software engineering, frontend development, performance, accessibility, and more.",
    url: "/blog/categories",
    image: `${config.website}${config.seo.image}`,
    keywords: [
      "blog categories",
      "software engineering topics",
      "frontend development categories",
      "typescript articles",
      "react articles",
      "next.js articles",
      "technical blog categories",
    ] as const,
    twitterCardType: "summary_large_image",

    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${config.website}/blog/categories#collection`,
        name: "Blog Categories",
        url: `${config.website}/blog/categories`,
        description:
          "A categorized index of blog posts written by Steven Brown, organized by technical topic.",
        isPartOf: {
          "@id": `${config.website}/#website`,
        },
        about: {
          "@id": `${config.website}/#person`,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Blog",
            item: `${config.website}/blog`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Categories",
            item: `${config.website}/blog/categories`,
          },
        ],
      },
    ],
  },
  blogCategory: {
    build: (category: {
      title: string;
      slug: string;
      description?: string;
    }) => ({
      title: `${category.title} Posts`,
      description:
        category.description ??
        `Browse all blog posts filed under ${category.title}. Articles focused on software engineering, frontend development, and real-world implementation details.`,
      url: `/blog/categories/${category.slug}`,
      image: `${config.website}${config.seo.image}`,
      keywords: [
        category.title.toLowerCase(),
        "software engineering blog",
        "frontend development",
        "technical articles",
        "programming posts",
      ] as const,
      twitterCardType: "summary_large_image" as const,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${config.website}/blog/categories/${category.slug}#collection`,
          name: `${category.title} Posts`,
          url: `${config.website}/blog/categories/${category.slug}`,
          description:
            category.description ??
            `All blog posts categorized under ${category.title}.`,
          isPartOf: {
            "@id": `${config.website}/blog#blog`,
          },
          about: {
            "@id": `${config.website}/#person`,
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Blog",
              item: `${config.website}/blog`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Categories",
              item: `${config.website}/blog/categories`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: category.title,
              item: `${config.website}/blog/categories/${category.slug}`,
            },
          ],
        },
      ],
    }),
  },
  blogTag: {
    build: (tag: { tag: string; slug: string }) => ({
      title: `${tag.tag} Posts`,
      description: `All blog posts tagged with ${tag.tag}. Articles focused on software engineering, frontend development, and real-world problem solving.`,
      url: `/blog/tags/${tag.slug}`,
      image: `${config.website}${config.seo.image}`,
      keywords: [
        tag.tag.toLowerCase(),
        "software engineering blog",
        "technical articles",
        "frontend development",
        "programming posts",
      ] as const,
      twitterCardType: "summary_large_image" as const,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${config.website}/blog/tags/${tag.slug}#collection`,
          name: `${tag.tag} Posts`,
          url: `${config.website}/blog/tags/${tag.slug}`,
          description: `All blog posts tagged with ${tag.tag}.`,
          isPartOf: {
            "@id": `${config.website}/blog#blog`,
          },
          about: {
            "@id": `${config.website}/#person`,
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Blog",
              item: `${config.website}/blog`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Tags",
              item: `${config.website}/blog/tags`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: tag.tag,
              item: `${config.website}/blog/tags/${tag.slug}`,
            },
          ],
        },
      ],
    }),
  },
  contact: {
    title: "Contact",
    description:
      "Get in touch with Steven Brown to discuss web projects, freelance or part-time opportunities, questions, or collaboration ideas.",
    url: "/contact",
    image: `${config.website}${config.seo.image}`,
    keywords: [
      "contact steven brown",
      "hire software engineer",
      "freelance developer",
      "web development contact",
      "software consulting",
    ] as const,
    twitterCardType: "summary_large_image" as const,

    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${config.website}/contact#contactpage`,
        url: `${config.website}/contact`,
        name: "Contact",
        description:
          "Contact Steven Brown for software engineering work, consulting, or general inquiries.",
        isPartOf: {
          "@id": `${config.website}/#website`,
        },
        about: {
          "@id": `${config.website}/#person`,
        },
        mainEntity: {
          "@type": "Person",
          "@id": `${config.website}/#person`,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Contact",
            item: `${config.website}/contact`,
          },
        ],
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    description:
      "Explore selected software engineering projects by Steven Brown, showcasing frontend architecture, performance optimization, accessibility, and modern web development.",
    url: "/portfolio",
    image: `${config.website}${config.seo.image}`,
    keywords: [
      "software engineer portfolio",
      "web development projects",
      "frontend projects",
      "react projects",
      "next.js projects",
      "typescript projects",
      "software case studies",
    ] as const,
    twitterCardType: "summary_large_image" as const,

    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${config.website}/portfolio#collection`,
        name: "Portfolio",
        url: `${config.website}/portfolio`,
        description:
          "A curated portfolio of software engineering projects by Steven Brown.",
        isPartOf: {
          "@id": `${config.website}/#website`,
        },
        about: {
          "@id": `${config.website}/#person`,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Portfolio",
            item: `${config.website}/portfolio`,
          },
        ],
      },
    ],
  },
  portfolioProject: {
    build: (project: {
      title: string;
      slug: string;
      description?: string;
      image?: string;
      technologies?: string[];
    }) => ({
      title: project.title,
      description:
        project.description ??
        `Case study and technical breakdown of the ${project.title} project by Steven Brown.`,
      url: `/portfolio/${project.slug}`,
      image: project.image
        ? project.image.startsWith("http")
          ? project.image
          : `${config.website}${project.image}`
        : `${config.website}${config.seo.image}`,
      keywords: [
        project.title.toLowerCase(),
        ...(project.technologies ?? []).map((t) => t.toLowerCase()),
        "software engineering project",
        "frontend project",
        "case study",
        "web development",
      ] as const,
      twitterCardType: "summary_large_image" as const,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": `${config.website}/portfolio/${project.slug}#project`,
          name: project.title,
          description:
            project.description ??
            `Software engineering project: ${project.title}.`,
          url: `${config.website}/portfolio/${project.slug}`,
          author: {
            "@type": "Person",
            "@id": `${config.website}/#person`,
          },
          isPartOf: {
            "@id": `${config.website}/portfolio#collection`,
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Portfolio",
              item: `${config.website}/portfolio`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: project.title,
              item: `${config.website}/portfolio/${project.slug}`,
            },
          ],
        },
      ],
    }),
  },
  blogPost: {
    build: (post: {
      title: string;
      slug: string;
      excerpt?: string;
      image?: string;
      publishedAt?: string;
      tags?: string[];
    }) => ({
      title: post.title,
      description:
        post.excerpt ??
        `Read ${post.title}, a technical article by Steven Brown on modern software engineering.`,
      url: `/blog/post/${post.slug}`,
      image: post.image
        ? post.image.startsWith("http")
          ? post.image
          : `${config.website}${post.image}`
        : `${config.website}${config.seo.image}`,
      keywords: [
        post.title.toLowerCase(),
        ...(post.tags ?? []).map((t) => t.toLowerCase()),
        "software engineering blog",
        "technical article",
        "frontend development",
        "programming",
      ] as const,
      twitterCardType: "summary_large_image" as const,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${config.website}/blog/post/${post.slug}#post`,
          headline: post.title,
          description: post.excerpt,
          url: `${config.website}/blog/post/${post.slug}`,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          author: {
            "@type": "Person",
            "@id": `${config.website}/#person`,
          },
          publisher: {
            "@type": "Person",
            "@id": `${config.website}/#person`,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${config.website}/blog/post/${post.slug}`,
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Blog",
              item: `${config.website}/blog`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: post.title,
              item: `${config.website}/blog/post/${post.slug}`,
            },
          ],
        },
      ],
    }),
  },
  blogTags: {
    title: "Blog Tags",
    description:
      "Browse all blog tags on Steven Develops. Explore posts grouped by specific technologies, concepts, and software engineering topics.",
    url: "/blog/tags",
    image: `${config.website}${config.seo.image}`,
    keywords: [
      "blog tags",
      "software engineering tags",
      "typescript tags",
      "react tags",
      "next.js tags",
      "technical blog topics",
    ] as const,
    twitterCardType: "summary_large_image" as const,

    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${config.website}/blog/tags#collection`,
        name: "Blog Tags",
        url: `${config.website}/blog/tags`,
        description:
          "An index of blog tags used to organize technical articles by topic.",
        isPartOf: {
          "@id": `${config.website}/#website`,
        },
        about: {
          "@id": `${config.website}/#person`,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Blog",
            item: `${config.website}/blog`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tags",
            item: `${config.website}/blog/tags`,
          },
        ],
      },
    ],
  },
} as const;

// apps/marketing/mdx-components.tsx

import type { MDXComponents } from "mdx/types";
import type { ReactNode, HTMLAttributes } from "react";
import { slugify } from "./lib/utils";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { TweetEmbed } from "./components/shared/TweetEmbed";
import { YouTubeEmbed } from "./components/shared/YoutubeEmbed";

/* -------------------------------------------------------------------------- */
/* Utils                                                                      */
/* -------------------------------------------------------------------------- */

function toText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) {
    return children.map((c) => (typeof c === "string" ? c : "")).join("");
  }
  return "";
}

/* -------------------------------------------------------------------------- */
/* MDX components                                                             */
/* -------------------------------------------------------------------------- */

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    /* -------------------------------- Headings ------------------------------ */
    Tweet: TweetEmbed,
    YouTube: YouTubeEmbed,

    h1: ({
      children,
      ...props
    }: { children?: ReactNode } & HTMLAttributes<HTMLHeadingElement>) => {
      const id = slugify(toText(children));
      return (
        <h1
          id={id}
          className="
            my-4
            scroll-mt-24
            text-2xl
            font-heading
            font-semibold
          "
          {...props}
        >
          {children}
        </h1>
      );
    },

    h2: ({
      children,
      ...props
    }: { children?: ReactNode } & HTMLAttributes<HTMLHeadingElement>) => {
      const id = slugify(toText(children));
      return (
        <h2
          id={id}
          className="
            my-3
            scroll-mt-24
            text-xl
            font-heading
            font-semibold
          "
          {...props}
        >
          {children}
        </h2>
      );
    },

    h3: ({
      children,
      ...props
    }: { children?: ReactNode } & HTMLAttributes<HTMLHeadingElement>) => {
      const id = slugify(toText(children));
      return (
        <h3
          id={id}
          className="
            my-2
            scroll-mt-24
            text-lg
            font-heading
            font-medium
          "
          {...props}
        >
          {children}
        </h3>
      );
    },

    /* ----------------------------- Paragraphs ------------------------------ */

    p: ({
      children,
      ...props
    }: { children?: ReactNode } & HTMLAttributes<HTMLParagraphElement>) => {
      return (
        <p className="my-4 leading-relaxed" {...props}>
          {children}
        </p>
      );
    },

    /* ------------------------------ Code blocks ----------------------------- */

    pre: ({ children }: any) => {
      const child = children?.props || {};
      const className = child.className || "";
      const language = className.replace("language-", "") || "plaintext";

      const code =
        typeof child.children === "string" ? child.children.trim() : "";

      const highlighted = hljs.highlight(code, { language }).value;

      return (
        <pre className="my-6 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      );
    },

    code: ({ className, children }: any) => {
      // Inline code
      if (!className) {
        return (
          <code className="rounded bg-zinc-200/70 px-1 py-0.5 font-mono text-[0.9em] dark:bg-zinc-700/60">
            {children}
          </code>
        );
      }

      // Block handled by <pre>
      return children;
    },

    /* ------------------------------ Passthrough ----------------------------- */

    ...components,
  };
}

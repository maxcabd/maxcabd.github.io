import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { TableOfContents } from "@/components/toc";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) notFound();
  return post;
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params.slug);

  return (
    <main className="min-h-screen bg-background relative">
      {/* TOC — fixed LEFT sidebar, xl only */}
      <aside className="hidden xl:block fixed top-28 left-[max(2rem,calc((100vw-52rem)/2-16rem))] w-[200px]">
        <TableOfContents />
      </aside>

      {/* Centered content */}
      <div className="max-w-[42rem] mx-auto px-5 sm:px-6 pt-24 pb-32">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-warm hover:text-white transition-colors duration-300 mb-16"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Writing
        </Link>

        <article>
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 text-[14px] text-warm mb-8">
            <time>{formatDate(post.date)}</time>
            {post.readTime && (
              <>
                <span>·</span>
                <span>{post.readTime}</span>
              </>
            )}
            {post.tags && post.tags.length > 0 && (
              <>
                <span>·</span>
                <span>{post.tags.join(", ")}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2.2rem,6vw,3.8rem)] font-garamond font-normal leading-[1.08] tracking-[-0.02em] text-white mb-8">
            {post.title}
          </h1>

          {/* Description */}
          {post.description && (
            <p className="text-[18px] sm:text-[20px] font-garamond italic text-warm leading-relaxed mb-12">
              {post.description}
            </p>
          )}

          {/* Divider */}
          <hr className="border-warm/20 mb-16" />

          {/* MDX body */}
          <Mdx code={post.body.code} />
        </article>
      </div>
    </main>
  );
}
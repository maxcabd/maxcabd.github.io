import { allPosts } from "@/.contentlayer/generated";
import { compareDesc, format } from "date-fns";
import Link from "next/link";

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 pt-28 pb-32">
        {/* Header */}
        <h1 className="text-[15px] text-warm mb-1">Writing</h1>
        <p className="text-[13px] text-warm/70 mb-10">
          Projects, thoughts, inspiration.
        </p>

        {/* Post list */}
        <div>
          {posts.map((post) => (
            <Link key={post.slug} href={post.url}>
              <div className="group py-4 border-b border-warm/10 cursor-pointer hover:bg-warm/[0.03] -mx-4 px-4 rounded-lg transition-colors duration-300">
                <h2 className="text-[15px] font-normal text-white/85 leading-snug group-hover:text-white transition-colors duration-300">
                  {post.title}
                </h2>

                {post.description && (
                  <p className="mt-1.5 text-[13px] text-warm/80 leading-relaxed max-w-xl">
                    {post.description}
                  </p>
                )}

                <div className="mt-2 flex flex-wrap items-center gap-2 text-[12px] text-warm/70">
                  <time>{format(new Date(post.date), "MMMM d, yyyy")}</time>
                  {post.tags && post.tags.length > 0 && (
                    <>
                      <span>·</span>
                      <span>{post.tags.slice(0, 3).join(", ")}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
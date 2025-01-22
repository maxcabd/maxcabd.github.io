import { allPosts } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all blog posts
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
    <main className="min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="mb-8">
          <Link
            href="/blog"
            className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to blog
          </Link>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <time className="text-sm text-muted-foreground">
              {formatDate(post.date)}
            </time>
          </div>
        </div>
        <Mdx code={post.body.code} />
      </article>
    </main>
  );
}
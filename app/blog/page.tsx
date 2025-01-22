import { allPosts } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';
import { CardItem } from '@/components/card-item';
import { formatDate } from '@/lib/utils';

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold mb-16">Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <CardItem
              key={post.slug}
              title={post.title}
              description={post.description}
              date={formatDate(post.date)}
              tags={post.tags}
              href={post.url}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
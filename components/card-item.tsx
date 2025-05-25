'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CardItemProps {
  title: string;
  description?: string;
  date?: string;
  tags: string[];
  href: string;
  className?: string;
}

export function CardItem({ title, description, date, tags, href, className }: CardItemProps) {
  return (
    <Link href={href} className="block mb-8 last:mb-0">
      <Card className={cn(
        "group relative overflow-hidden transition-all duration-300 h-[160px]",
        "hover:bg-gradient-to-br from-pink-600/10 via-blue-500/10 to-green-500/10",
        "before:absolute before:inset-0 before:bg-gradient-to-br",
        "before:from-pink-600/20 before:via-blue-500/20 before:to-green-500/20",
        "before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className
      )}>
        <div className="relative z-10 h-full p-4 flex flex-col">
          {date && (
            <time className="text-xs text-muted-foreground transition-colors group-hover:text-white/80 mb-2">
              {date}
            </time>
          )}
          <div className="flex-grow overflow-hidden">
            <h3 className="font-semibold transition-colors group-hover:text-white text-sm mb-1.5 line-clamp-1">
              {title}
            </h3>
            {description && (
              <p className="text-muted-foreground transition-colors group-hover:text-white/80 text-xs line-clamp-2">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] px-2 py-0.5 transition-colors group-hover:bg-white/10 group-hover:text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
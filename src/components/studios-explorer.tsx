'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Studio } from '@/lib/data';

const CATEGORIES = ['All', 'Recording', 'Film Score', 'Mixing', 'Mastering', 'Rehearsal', 'Live'];

interface Props {
  studios: Studio[];
}

export default function StudiosExplorer({ studios }: Props) {
  const [category, setCategory] = useState('All');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filtered =
    category === 'All' ? studios : studios.filter((s) => s.type === category);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              'shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors',
              category === cat
                ? 'bg-foreground text-background border-foreground'
                : 'bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Studio grid */}
      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-center py-16">
          No studios in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-2">
          {filtered.map((studio) => (
            <Link key={studio.id} href={`/studios/${studio.id}`} className="group">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-3">
                <Image
                  src={studio.images[0]}
                  alt={studio.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Heart */}
                <button
                  onClick={(e) => toggleFavorite(studio.id, e)}
                  className="absolute top-3 right-3 p-1 rounded-full hover:scale-110 transition-transform"
                  aria-label={favorites.has(studio.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart
                    className={cn(
                      'h-5 w-5 drop-shadow',
                      favorites.has(studio.id)
                        ? 'fill-primary text-primary'
                        : 'fill-black/20 text-white'
                    )}
                  />
                </button>
                {/* Type badge */}
                <Badge className="absolute bottom-3 left-3 bg-white/95 text-foreground hover:bg-white/95 text-xs font-medium shadow-sm">
                  {studio.type}
                </Badge>
              </div>

              {/* Info */}
              <div className="space-y-0.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-foreground text-sm leading-snug line-clamp-1">
                    {studio.name}
                  </p>
                  <span className="flex items-center gap-0.5 text-xs shrink-0 mt-0.5">
                    <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
                    <span className="font-medium">{studio.rating}</span>
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {studio.city}, {studio.country}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {studio.notableArtists.slice(0, 3).join(' · ')}
                </p>
                <p className="text-sm mt-1">
                  <span className="font-bold text-foreground">
                    ${studio.pricePerNight.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground font-normal"> / night</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

import Image from 'next/image';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import StudiosExplorer from '@/components/studios-explorer';
import { studios } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[480px] md:h-[560px]">
        <Image
          src="https://picsum.photos/seed/soundstay-hero/1920/1080"
          alt="Historic recording studio interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 max-w-3xl leading-tight">
            Stay where the music was made
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl">
            Book legendary recording studios around the world — and arrive with
            world-class collaborators ready to jam.
          </p>

          {/* Search widget */}
          <div className="bg-white text-foreground rounded-full shadow-2xl flex items-center w-full max-w-2xl overflow-hidden">
            <div className="flex-1 px-5 py-3 border-r border-border min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Where
              </p>
              <input
                type="text"
                placeholder="Anywhere in the world"
                className="w-full text-sm focus:outline-none text-foreground placeholder:text-muted-foreground bg-transparent"
              />
            </div>
            <div className="flex-1 px-5 py-3 border-r border-border hidden sm:block min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                When
              </p>
              <input
                type="text"
                placeholder="Add dates"
                className="w-full text-sm focus:outline-none text-foreground placeholder:text-muted-foreground bg-transparent"
              />
            </div>
            <div className="flex-1 px-5 py-3 hidden sm:block min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Who&apos;s joining
              </p>
              <input
                type="text"
                placeholder="Add collaborators"
                className="w-full text-sm focus:outline-none text-foreground placeholder:text-muted-foreground bg-transparent"
              />
            </div>
            <div className="px-3 py-2 shrink-0">
              <Button size="icon" className="rounded-full h-10 w-10">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Studios explorer (category filter + grid) */}
      <StudiosExplorer studios={studios} />

      {/* Stats */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '200+', label: 'Historic studios' },
              { value: '50+', label: 'Countries' },
              { value: '2,400+', label: 'Session musicians' },
              { value: '4.9★', label: 'Average rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 SoundStay. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

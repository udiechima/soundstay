import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Award, Calendar, MapPin, Music2, Star } from 'lucide-react';
import { trace } from '@opentelemetry/api';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/navbar';
import BookingPanel from '@/components/booking-panel';
import { collaboratorTypes, getStudioById } from '@/lib/data';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function StudioPage({ params }: Props) {
  const { id } = await params;

  const studio = await trace
    .getTracer('soundstay')
    .startActiveSpan('studio.lookup', (span) => {
      try {
        const result = getStudioById(id);
        span.setAttribute('studio.id', id);
        span.setAttribute('studio.found', result !== undefined);
        if (result) {
          span.setAttribute('studio.name', result.name);
          span.setAttribute('studio.city', result.city);
          span.setAttribute('studio.country', result.country);
          span.setAttribute('studio.type', result.type);
          span.setAttribute('studio.price_per_night', result.pricePerNight);
          span.setAttribute('studio.rating', result.rating);
          span.setAttribute('studio.year_built', result.yearBuilt);
          span.setAttribute('studio.amenity_count', result.amenities.length);
          span.setAttribute('studio.genres', result.genres.join(', '));
        }
        return result;
      } finally {
        span.end();
      }
    });

  if (!studio) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back + header */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to studios
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                {studio.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-foreground text-foreground" />
                  <span className="font-medium text-foreground">{studio.rating}</span>
                  <span>({studio.reviewCount.toLocaleString()} reviews)</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {studio.city}, {studio.country}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Est. {studio.yearBuilt}
                </span>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {studio.type}
            </Badge>
          </div>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden mb-10 h-64 md:h-96">
          <div className="col-span-2 row-span-2 relative">
            <Image
              src={studio.images[0]}
              alt={studio.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {studio.images.slice(1, 5).map((img, i) => (
            <div key={i} className="relative hidden md:block">
              <Image
                src={img}
                alt={`${studio.name} view ${i + 2}`}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          ))}
        </div>

        {/* Content + booking sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Host */}
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <div>
                <h2 className="text-xl font-semibold">Hosted by {studio.host}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {studio.genres.join(' · ')}
                </p>
              </div>
              <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center shrink-0">
                <Music2 className="h-7 w-7 text-muted-foreground" />
              </div>
            </div>

            {/* Notable artists */}
            <div className="pb-6 border-b border-border">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Notable artists who recorded here</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {studio.notableArtists.map((artist) => (
                  <Badge key={artist} variant="secondary">
                    {artist}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="pb-6 border-b border-border">
              <h3 className="text-lg font-semibold mb-3">About this studio</h3>
              <div className="space-y-3">
                {studio.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-sm">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="pb-6 border-b border-border">
              <h3 className="text-lg font-semibold mb-4">What&apos;s included</h3>
              <div className="grid grid-cols-2 gap-3">
                {studio.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaborators overview */}
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Collaborators available in {studio.city}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Add session musicians to your booking and arrive ready to create
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {collaboratorTypes.map((collab) => (
                  <div
                    key={collab.id}
                    className="border border-border rounded-xl p-3"
                  >
                    <span className="text-2xl block mb-1">{collab.emoji}</span>
                    <p className="font-semibold text-sm">{collab.label}</p>
                    <p className="text-muted-foreground text-xs">{collab.description}</p>
                    <p className="text-xs mt-1 text-muted-foreground">
                      {collab.available} available
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Reviews teaser */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-foreground text-foreground" />
                <span className="text-lg font-semibold">
                  {studio.rating} · {studio.reviewCount.toLocaleString()} reviews
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Sign in to read all reviews from artists who have recorded here.
              </p>
            </div>
          </div>

          {/* Right: Booking */}
          <div className="lg:col-span-1">
            <BookingPanel pricePerNight={studio.pricePerNight} />
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-16">
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

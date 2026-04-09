export type CollaboratorType = {
  id: string;
  label: string;
  emoji: string;
  ratePerDay: number;
  available: number;
  description: string;
};

export type Studio = {
  id: string;
  name: string;
  city: string;
  country: string;
  description: string;
  shortDescription: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  genres: string[];
  type: string;
  notableArtists: string[];
  yearBuilt: number;
  host: string;
};

export const collaboratorTypes: CollaboratorType[] = [
  { id: 'guitarist', label: 'Guitarist', emoji: '🎸', ratePerDay: 350, available: 12, description: '6-string, 12-string, classical & slide' },
  { id: 'vocalist', label: 'Vocalist', emoji: '🎤', ratePerDay: 400, available: 8, description: 'Lead, backing & harmony' },
  { id: 'bassist', label: 'Bassist', emoji: '🎵', ratePerDay: 300, available: 9, description: 'Electric & upright bass' },
  { id: 'drummer', label: 'Drummer', emoji: '🥁', ratePerDay: 350, available: 7, description: 'Session & live drummers' },
  { id: 'keyboardist', label: 'Keyboardist', emoji: '🎹', ratePerDay: 320, available: 11, description: 'Piano, synth & organ' },
  { id: 'saxophonist', label: 'Saxophonist', emoji: '🎷', ratePerDay: 380, available: 5, description: 'Alto, tenor & baritone' },
  { id: 'violinist', label: 'Violinist', emoji: '🎻', ratePerDay: 420, available: 6, description: 'Classical & contemporary' },
  { id: 'producer', label: 'Producer', emoji: '🎛️', ratePerDay: 600, available: 4, description: 'Mixing, mastering & arrangement' },
];

export const studios: Studio[] = [
  {
    id: 'abbey-road',
    name: 'Abbey Road Studios',
    city: 'London',
    country: 'United Kingdom',
    shortDescription: 'Where the Beatles changed music forever. The most iconic recording studio on Earth.',
    description: `Abbey Road Studios has been at the heart of the music industry since 1931. This legendary London facility has seen more history than almost any other building on Earth. From the Beatles to Pink Floyd, Adele to Kanye West, the most important recordings of the last century have been captured within these walls.\n\nStudio Two — where the Beatles recorded almost their entire catalog — remains meticulously preserved with vintage outboard gear and the original console. The famous crosswalk outside is visited by millions of fans each year.\n\nThe facility boasts three world-class studios and a cutting-edge Dolby Atmos suite. Staying here means sleeping where legends slept, working where history was made.`,
    pricePerNight: 4800,
    rating: 4.99,
    reviewCount: 1284,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Abbey_Road_Studios_2010-04-08_-_orchestral_recording_in_Studio_2.jpg/1200px-Abbey_Road_Studios_2010-04-08_-_orchestral_recording_in_Studio_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/Abbey_road_studios.jpg',
      'https://picsum.photos/seed/abbey3/1200/800',
      'https://picsum.photos/seed/abbey4/1200/800',
      'https://picsum.photos/seed/abbey5/1200/800',
    ],
    amenities: ['Vintage SSL Console', 'Steinway Grand Piano', 'Neve 8078', 'Outboard Rack', 'Isolation Booths', 'Live Room', 'Green Room', 'Kitchen', 'WiFi'],
    genres: ['Rock', 'Pop', 'Classical', 'Electronic'],
    type: 'Recording',
    notableArtists: ['The Beatles', 'Pink Floyd', 'Adele', 'Radiohead', 'Paul McCartney'],
    yearBuilt: 1931,
    host: 'Universal Music Group',
  },
  {
    id: 'electric-lady',
    name: 'Electric Lady Studios',
    city: 'New York',
    country: 'United States',
    shortDescription: 'Built by Jimi Hendrix in 1970, this Greenwich Village gem remains one of the most sought-after rooms in the world.',
    description: `Electric Lady Studios was purpose-built by Jimi Hendrix in 1970 in the heart of Greenwich Village. Hendrix envisioned a studio that was as much a creative sanctuary as a recording facility — with curved walls, lush carpeting, and a feel unlike any other studio in New York.\n\nAfter Hendrix's untimely passing, the studio continued to attract the greatest names in music. David Bowie, Led Zeppelin, Lady Gaga, Daft Punk, Beyoncé, and countless others have called this basement hideaway their creative home.\n\nThe studio features six rooms spanning two underground floors, each with its own distinct character. Studio A's original Neve 8068 console remains in daily use, a relic that's touched some of the greatest recordings in history.`,
    pricePerNight: 5200,
    rating: 4.97,
    reviewCount: 987,
    images: [
      'https://picsum.photos/seed/electric1/1200/800',
      'https://picsum.photos/seed/electric2/1200/800',
      'https://picsum.photos/seed/electric3/1200/800',
      'https://picsum.photos/seed/electric4/1200/800',
      'https://picsum.photos/seed/electric5/1200/800',
    ],
    amenities: ['Neve 8068 Console', 'Isolation Booths', 'Vintage Outboard', 'Vinyl Collection', 'Lounge', 'Kitchen', 'WiFi', 'Drum Kit'],
    genres: ['Rock', 'R&B', 'Hip-Hop', 'Jazz', 'Electronic'],
    type: 'Recording',
    notableArtists: ['Jimi Hendrix', 'David Bowie', 'Led Zeppelin', 'Beyoncé', 'Daft Punk'],
    yearBuilt: 1970,
    host: 'Electric Lady Studios LLC',
  },
  {
    id: 'capitol-studios',
    name: 'Capitol Studios',
    city: 'Los Angeles',
    country: 'United States',
    shortDescription: "Inside the iconic Capitol Records tower, Frank Sinatra's studio is Hollywood royalty.",
    description: `Nestled beneath the iconic Capitol Records building in Hollywood, Capitol Studios is the crown jewel of the Los Angeles recording scene. Built in 1956, the studio was designed specifically for music recording with a unique echo chamber system that remains unmatched to this day.\n\nFrank Sinatra called Studio A his home. Nat King Cole, Judy Garland, the Beach Boys, Katy Perry, and Beck have all worked in these legendary rooms. The reverb chambers — originally designed for Capitol by guitarist Les Paul — give the studio its unmistakable sound.\n\nFour main rooms accommodate everything from intimate vocals to full orchestra sessions. The studio's collection of vintage instruments includes a 1919 Steinway Model D grand piano.`,
    pricePerNight: 4500,
    rating: 4.95,
    reviewCount: 756,
    images: [
      'https://picsum.photos/seed/capitol1/1200/800',
      'https://picsum.photos/seed/capitol2/1200/800',
      'https://picsum.photos/seed/capitol3/1200/800',
      'https://picsum.photos/seed/capitol4/1200/800',
      'https://picsum.photos/seed/capitol5/1200/800',
    ],
    amenities: ['Echo Chambers', '1919 Steinway Piano', 'Full Orchestra Setup', 'Vintage Microphones', 'Green Room', 'Lounge', 'WiFi', 'Kitchen'],
    genres: ['Jazz', 'Pop', 'Classical', 'Rock', 'Country'],
    type: 'Recording',
    notableArtists: ['Frank Sinatra', 'Nat King Cole', 'The Beach Boys', 'Katy Perry', 'Beck'],
    yearBuilt: 1956,
    host: 'Capitol Records',
  },
  {
    id: 'hansa-tonstudio',
    name: 'Hansa Tonstudio',
    city: 'Berlin',
    country: 'Germany',
    shortDescription: "David Bowie and Iggy Pop's Berlin-era sanctuary, overlooking the old Wall.",
    description: `Hansa Tonstudio in Berlin is one of the most storied recording facilities in Europe. Once a Nazi ballroom and later a music hall near the Berlin Wall, Hansa became synonymous with the Berlin School of electronic music and the creative exile of artists in the 1970s and 80s.\n\nDavid Bowie recorded his legendary Berlin Trilogy here — "Low," "Heroes," and "Lodger" — alongside Iggy Pop, Brian Eno, and Tony Visconti. The haunting atmosphere of a divided city can be felt in every note recorded at Hansa.\n\nToday the studio has been meticulously restored to its original configuration. The legendary Studio 2 — "The Hall by the Wall" — is exactly as Bowie left it, with stunning views over the former Checkpoint Charlie.`,
    pricePerNight: 2800,
    rating: 4.93,
    reviewCount: 521,
    images: [
      'https://picsum.photos/seed/hansa1/1200/800',
      'https://picsum.photos/seed/hansa2/1200/800',
      'https://picsum.photos/seed/hansa3/1200/800',
      'https://picsum.photos/seed/hansa4/1200/800',
      'https://picsum.photos/seed/hansa5/1200/800',
    ],
    amenities: ['Vintage SSL Console', 'Grand Piano', 'Modular Synths', 'Historic Live Room', 'Berlin Wall View', 'Lounge', 'WiFi', 'Kitchen'],
    genres: ['Rock', 'Electronic', 'New Wave', 'Ambient', 'Pop'],
    type: 'Recording',
    notableArtists: ['David Bowie', 'Iggy Pop', 'Brian Eno', 'Depeche Mode', 'Nick Cave'],
    yearBuilt: 1969,
    host: 'Hansa Studios GmbH',
  },
  {
    id: 'studio-ferber',
    name: 'Studio Ferber',
    city: 'Paris',
    country: 'France',
    shortDescription: "A jewel of the French music scene, where Edith Piaf's legacy lives in every stone.",
    description: `Studio Ferber is one of the last great independent studios in Paris, and arguably the most beautiful recording space in France. Originally a silent film production facility, the studio was converted in the 1940s and quickly became home to the Parisian music elite.\n\nEdith Piaf, Serge Gainsbourg, Charlotte Gainsbourg, and Air have all recorded here. The studio's signature sound — warm, intimate, and distinctly French — comes from its custom-designed acoustic environment and collection of vintage microphones.\n\nThe grand live room features 12-meter ceilings and parquet floors that give strings and piano an unrivaled natural resonance. A Bösendorfer Imperial grand piano dominates the room.`,
    pricePerNight: 2200,
    rating: 4.91,
    reviewCount: 389,
    images: [
      'https://picsum.photos/seed/ferber1/1200/800',
      'https://picsum.photos/seed/ferber2/1200/800',
      'https://picsum.photos/seed/ferber3/1200/800',
      'https://picsum.photos/seed/ferber4/1200/800',
      'https://picsum.photos/seed/ferber5/1200/800',
    ],
    amenities: ['Bösendorfer Imperial', 'Vintage Neumann Mics', '12m Ceilings', 'Parquet Floors', 'Wine Cellar', 'Courtyard', 'WiFi', 'Kitchen'],
    genres: ['Pop', 'Classical', 'Jazz', 'Chanson', 'Electronic'],
    type: 'Recording',
    notableArtists: ['Edith Piaf', 'Serge Gainsbourg', 'Air', 'Charlotte Gainsbourg', 'Phoenix'],
    yearBuilt: 1946,
    host: 'Studio Ferber SAS',
  },
  {
    id: 'muscle-shoals',
    name: 'Muscle Shoals Sound Studio',
    city: 'Sheffield',
    country: 'United States',
    shortDescription: "The Swampers' legendary Alabama studio where soul, R&B, and country collided.",
    description: `Muscle Shoals Sound Studio in Sheffield, Alabama is one of the most unexpected musical powerhouses in American history. The tiny riverside city became the unlikely capital of Southern soul and R&B in the late 1960s and 70s.\n\nAretha Franklin recorded "I Never Loved a Man the Way I Love You" here. The Rolling Stones came to capture authentic American soul. Bob Dylan, Paul Simon, Rod Stewart, and Lynyrd Skynyrd all made the pilgrimage to the banks of the Tennessee River.\n\nThe studio's secret weapon was the Muscle Shoals Rhythm Section — the legendary session musicians known as "The Swampers" — whose tight groove defined the Sound of Young America. The original room has been preserved as both a working studio and a music landmark.`,
    pricePerNight: 1800,
    rating: 4.88,
    reviewCount: 443,
    images: [
      'https://picsum.photos/seed/muscle1/1200/800',
      'https://picsum.photos/seed/muscle2/1200/800',
      'https://picsum.photos/seed/muscle3/1200/800',
      'https://picsum.photos/seed/muscle4/1200/800',
      'https://picsum.photos/seed/muscle5/1200/800',
    ],
    amenities: ['Original Console', 'Hammond B3 Organ', 'Session Musician Access', 'Live Room', 'Control Room', 'Vintage Gear', 'WiFi', 'Kitchen'],
    genres: ['Soul', 'R&B', 'Country', 'Rock', 'Blues'],
    type: 'Recording',
    notableArtists: ['Aretha Franklin', 'Rolling Stones', 'Bob Dylan', 'Lynyrd Skynyrd', 'Wilson Pickett'],
    yearBuilt: 1969,
    host: 'Muscle Shoals Music Foundation',
  },
  {
    id: 'air-studios',
    name: 'AIR Studios',
    city: 'London',
    country: 'United Kingdom',
    shortDescription: "George Martin's grand studio in a converted Hampstead church — home to the world's greatest film scores.",
    description: `AIR Studios was founded by the legendary producer George Martin — the "Fifth Beatle" — in a spectacular converted church in Hampstead, North London. The studio has become the premier destination for film score recording, with credits including Harry Potter, Dunkirk, Interstellar, James Bond, and countless others.\n\nThe main Lyndhurst Hall — the former nave of the church — offers an extraordinary acoustic environment with a 130-person orchestra capacity. The 9-meter-high ceiling and warm wooden surfaces create a natural reverb that is the envy of studios worldwide.\n\nBeyond film scoring, AIR's intimate recording rooms have hosted everyone from Paul McCartney to Adele. The studio's collection includes a Fazioli concert grand and a rare Wurlitzer theatre organ.`,
    pricePerNight: 5500,
    rating: 4.98,
    reviewCount: 612,
    images: [
      'https://picsum.photos/seed/air1/1200/800',
      'https://picsum.photos/seed/air2/1200/800',
      'https://picsum.photos/seed/air3/1200/800',
      'https://picsum.photos/seed/air4/1200/800',
      'https://picsum.photos/seed/air5/1200/800',
    ],
    amenities: ['130-piece Orchestra Capacity', 'Fazioli Concert Grand', 'Wurlitzer Organ', 'Church Acoustics', 'Film Projection', 'Lounge', 'WiFi', 'Catering'],
    genres: ['Classical', 'Film Score', 'Orchestral', 'Pop', 'Jazz'],
    type: 'Film Score',
    notableArtists: ['Hans Zimmer', 'John Williams', 'Adele', 'Paul McCartney', 'Coldplay'],
    yearBuilt: 1992,
    host: 'AIR Studios Ltd',
  },
  {
    id: 'tuff-gong',
    name: 'Tuff Gong Studios',
    city: 'Kingston',
    country: 'Jamaica',
    shortDescription: "Bob Marley's own studio — the beating heart of reggae music.",
    description: `Tuff Gong Studios was founded by Bob Marley himself in Kingston, Jamaica in 1965, and remains one of the most spiritually significant recording spaces in the world. Marley built the studio to give Jamaican artists creative and financial independence — a revolutionary act in its time.\n\nThe complex on Marcus Garvey Drive has witnessed the creation of some of the most enduring music in history. From "Exodus" to "Redemption Song," the Wailers laid down tracks here that changed popular music forever.\n\nToday, run by the Marley family, the studio operates as both a working facility and a cultural institution. The original control room has been preserved with Marley's equipment. Recording here is a profound creative experience that connects you directly to one of music's most towering figures.`,
    pricePerNight: 1600,
    rating: 4.94,
    reviewCount: 334,
    images: [
      'https://picsum.photos/seed/tuff1/1200/800',
      'https://picsum.photos/seed/tuff2/1200/800',
      'https://picsum.photos/seed/tuff3/1200/800',
      'https://picsum.photos/seed/tuff4/1200/800',
      'https://picsum.photos/seed/tuff5/1200/800',
    ],
    amenities: ['Original Marley Console', 'Vintage Riddim Setup', 'Bass Culture Room', 'Outdoor Recording Area', 'Rasta Kitchen', 'Garden', 'WiFi'],
    genres: ['Reggae', 'Dancehall', 'Ska', 'R&B', 'Roots'],
    type: 'Recording',
    notableArtists: ['Bob Marley', 'The Wailers', 'Ziggy Marley', 'Lauryn Hill', 'Damian Marley'],
    yearBuilt: 1965,
    host: 'Marley Family',
  },
];

export function getStudioById(id: string): Studio | undefined {
  return studios.find((s) => s.id === id);
}

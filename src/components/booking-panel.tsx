'use client';

import { useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { collaboratorTypes } from '@/lib/data';

interface Props {
  pricePerNight: number;
}

export default function BookingPanel({ pricePerNight }: Props) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [selectedCollabs, setSelectedCollabs] = useState<Set<string>>(new Set());

  const toggleCollab = (id: string) => {
    setSelectedCollabs((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const nights = 3; // mock
  const studioTotal = pricePerNight * nights;
  const collabTotal = Array.from(selectedCollabs).reduce((sum, id) => {
    const collab = collaboratorTypes.find((c) => c.id === id);
    return sum + (collab ? collab.ratePerDay * nights : 0);
  }, 0);
  const serviceFee = Math.round((studioTotal + collabTotal) * 0.12);
  const total = studioTotal + collabTotal + serviceFee;

  return (
    <div className="border border-border rounded-2xl p-6 shadow-lg space-y-5 sticky top-24">
      {/* Price header */}
      <div>
        <span className="text-2xl font-bold">${pricePerNight.toLocaleString()}</span>
        <span className="text-muted-foreground text-sm"> / night</span>
      </div>

      {/* Dates + guests */}
      <div className="border border-border rounded-xl overflow-hidden text-sm">
        <div className="grid grid-cols-2 divide-x divide-border">
          <div className="p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
              Check-in
            </p>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-foreground focus:outline-none text-sm"
            />
          </div>
          <div className="p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
              Check-out
            </p>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-foreground focus:outline-none text-sm"
            />
          </div>
        </div>
        <div className="border-t border-border p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
            Musicians
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">
              {guests} musician{guests !== 1 ? 's' : ''}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors"
                aria-label="Decrease musicians"
              >
                <Minus className="h-3 w-3" />
              </button>
              <span className="w-5 text-center text-sm font-medium">{guests}</span>
              <button
                onClick={() => setGuests((g) => Math.min(20, g + 1))}
                className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors"
                aria-label="Increase musicians"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Collaborators */}
      <div>
        <h3 className="font-semibold text-sm mb-0.5">Add collaborators</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Local session musicians, ready to jam on arrival
        </p>
        <div className="grid grid-cols-2 gap-2">
          {collaboratorTypes.map((collab) => {
            const selected = selectedCollabs.has(collab.id);
            return (
              <button
                key={collab.id}
                onClick={() => toggleCollab(collab.id)}
                className={cn(
                  'relative text-left p-3 rounded-xl border transition-all',
                  selected
                    ? 'border-foreground bg-foreground/5 shadow-sm'
                    : 'border-border hover:border-muted-foreground'
                )}
              >
                {selected && (
                  <div className="absolute top-2 right-2 h-4 w-4 rounded-full bg-foreground flex items-center justify-center">
                    <Check className="h-2.5 w-2.5 text-background" />
                  </div>
                )}
                <span className="text-xl block mb-0.5">{collab.emoji}</span>
                <span className="text-xs font-semibold block text-foreground">
                  {collab.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  ${collab.ratePerDay}/day
                </span>
                <span className="block text-xs text-muted-foreground">
                  {collab.available} available
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <Button className="w-full rounded-xl h-12 text-base font-semibold">
        Reserve
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        You won&apos;t be charged yet
      </p>

      <Separator />

      {/* Price breakdown */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground underline decoration-dotted">
            ${pricePerNight.toLocaleString()} × {nights} nights
          </span>
          <span>${studioTotal.toLocaleString()}</span>
        </div>
        {collabTotal > 0 && (
          <div className="flex justify-between">
            <span className="text-muted-foreground underline decoration-dotted">
              Collaborators × {nights} days
            </span>
            <span>${collabTotal.toLocaleString()}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-muted-foreground underline decoration-dotted">
            Service fee
          </span>
          <span>${serviceFee.toLocaleString()}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-bold pt-1">
          <span>Total</span>
          <span>${total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

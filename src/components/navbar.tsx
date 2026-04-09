'use client';

import Link from 'next/link';
import { Menu, Music2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary shrink-0">
          <Music2 className="h-7 w-7" />
          <span className="font-bold text-xl hidden sm:block tracking-tight">SoundStay</span>
        </Link>

        {/* Center search pill */}
        <div className="hidden md:flex items-center border border-border rounded-full px-4 py-2 gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-sm">
          <span className="font-medium pr-3 border-r border-border">Anywhere</span>
          <span className="font-medium px-3 border-r border-border">Any week</span>
          <span className="text-muted-foreground pl-2">Add collaborators</span>
          <div className="bg-primary text-primary-foreground rounded-full p-1.5">
            <Search className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex rounded-full text-sm font-medium"
          >
            List your studio
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex rounded-full">
            Sign in
          </Button>
          <Button size="sm" className="hidden md:flex rounded-full">
            Sign up
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden rounded-full h-9 w-9"
                />
              }
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-primary">
                  <Music2 className="h-5 w-5" />
                  SoundStay
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-6">
                <Button variant="ghost" className="justify-start">
                  Sign in
                </Button>
                <Button variant="ghost" className="justify-start">
                  Sign up
                </Button>
                <Button variant="ghost" className="justify-start">
                  List your studio
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

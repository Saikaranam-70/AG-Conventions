import {
  MountainIcon,
  Menu,
  GalleryHorizontal,
  Info,
  MapPin,
  Building,
  HomeIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navLinks = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/venues", label: "Venues", icon: Building },
  { href: "/gallery", label: "Gallery", icon: GalleryHorizontal },
  { href: "/contact", label: "Contact", icon: MapPin },
];

export function AppHeader() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/20">
      <Link
        href="/"
        className="flex items-center justify-center gap-2"
        prefetch={false}
      >
        <MountainIcon className="h-8 w-8 text-primary" />
        <span className="text-xl font-semibold font-headline">
          AG Conventions
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="ml-auto hidden lg:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 hover:underline"
            prefetch={false}
          >
            {link.label}
          </Link>
        ))}
        <Button asChild>
          <Link href="/#booking">Book Now</Link>
        </Button>
      </nav>

      {/* Mobile Nav */}
      <div className="ml-4 lg:hidden">
        <Sheet>
          <SheetTrigger asChild >
            <Button variant="outline" className="ml-40" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px]">
            {/* ✅ Accessibility fix */}
            <VisuallyHidden>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>

            <nav className="grid gap-4 text-lg font-medium p-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold mb-4"
                prefetch={false}
              >
                <MountainIcon className="h-8 w-8 text-primary" />
                <span className="font-headline">AG Conventions</span>
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

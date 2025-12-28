import Link from "next/link"
import { MountainIcon, Mail, Phone, MapPin } from "lucide-react"

export function AppFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
            <MountainIcon className="h-8 w-8 text-primary" />
            <span className="font-semibold font-headline text-2xl">AG Conventions</span>
          </Link>
          <p className="text-sm max-w-xs text-muted-foreground">
            The premier destination for world-class conferences, exhibitions, and celebrations.
          </p>
        </div>
        <div className="space-y-2 text-center md:text-left">
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-1">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/venues" className="text-muted-foreground hover:text-primary">Our Venues</Link></li>
                <li><Link href="/gallery" className="text-muted-foreground hover:text-primary">Gallery</Link></li>
                <li><Link href="/awards" className="text-muted-foreground hover:text-primary">Awards</Link></li>
            </ul>
        </div>
        <div className="space-y-2 text-center md:text-left">
            <h3 className="font-headline text-lg font-semibold">Support</h3>
            <ul className="space-y-1">
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                <li><Link href="/#booking" className="text-muted-foreground hover:text-primary">Book Now</Link></li>
                <li><Link href="/#virtual-tour" className="text-muted-foreground hover:text-primary">Virtual Tour</Link></li>
            </ul>
        </div>
        <div className="space-y-2 text-center md:text-left">
            <h3 className="font-headline text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center justify-center md:justify-start gap-2"><MapPin className="h-4 w-4 text-primary" /> W55X+H53, Penuguduru, Andhra Pradesh 533016</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><Mail className="h-4 w-4 text-primary" /> <a href="mailto:contact@bharatcc.com" className="hover:text-primary">contact@agconventions.com</a></li>
                <li className="flex items-center justify-center md:justify-start gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:+911123456789" className="hover:text-primary">+91 11 2345 6789</a></li>
            </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-border/20 pt-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Bharat Convention Center. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

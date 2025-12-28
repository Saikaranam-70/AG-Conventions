'use client';

import { AppHeader } from "@/components/app/header";
import { AppFooter } from "@/components/app/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle, // ✅ WhatsApp icon substitute
} from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    (event.target as HTMLFormElement).reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />

      <main className="flex-1">
        {/* HERO */}
        <section className="py-16 md:py-24 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              We're here to help you plan the perfect event. Reach out to us with
              your questions, or to schedule a visit.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="pb-16 md:pb-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* CONTACT INFO */}
              <div className="bg-secondary p-8 rounded-lg">
                <h2 className="text-3xl font-bold font-headline mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Address</h3>
                      <p className="text-muted-foreground">
                        W55X+H53, Penuguduru, Andhra Pradesh 533016
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full mt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <a
                        href="mailto:contact@agconventions.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        contact@agconventions.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full mt-1">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <a
                        href="tel:+911123456789"
                        className="text-muted-foreground hover:text-primary"
                      >
                        +91 11 2345 6789
                      </a>
                    </div>
                  </div>
                </div>

                {/* SOCIAL + WHATSAPP */}
                <div className="pt-8 mt-8 border-t border-border">
                  <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>

                  <div className="flex items-center gap-4 flex-wrap">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/917095835048?text=Hello%20AG%20Conventions,%20I%20want%20to%20enquire%20about%20booking."
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="p-3 rounded-full bg-green-500/10 text-green-600 hover:bg-green-500 hover:text-white transition"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </a>

                    <a
                      href="https://www.instagram.com/ag_conventions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>

                    <a
                      href="https://facebook.com/agconventions"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>

                    <a
                      href="https://twitter.com/agconventions"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>

                    {/* <a
                      href="https://linkedin.com/company/agconventions"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a> */}
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="bg-secondary p-8 rounded-lg">
                <h2 className="text-3xl font-bold font-headline mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Your Email" required />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={5} required />
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3912212965947!2d82.1953433750782!3d16.908898316413218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3789004f998bb1%3A0x33f8fe6c4fededae!2sAG%20convention%20hall!5e1!3m2!1sen!2sin!4v1766925691343!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
          />
          
        </section>
      </main>

      <AppFooter />
    </div>
  );
}

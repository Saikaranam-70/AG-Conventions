import type { Hall, Testimonial } from "@/lib/types";

export const halls: Hall[] = [
  {
    id: "maharaja",
    name: "The Maharaja Hall",
    description: "Our grandest hall, perfect for large-scale conferences, trade shows, and spectacular weddings. Features state-of-the-art audiovisual equipment and soaring ceilings.",
    capacity: 1500,
    price: 10000,
    imageId: "hall-maharaja",
  },
  {
    id: "rani",
    name: "The Rani Suite",
    description: "An elegant and versatile space ideal for corporate meetings, banquets, and upscale social gatherings. Its classic decor provides a sophisticated backdrop for any event.",
    capacity: 400,
    price: 4500,
    imageId: "hall-rani",
  },
  {
    id: "samrat",
    name: "The Samrat Expo",
    description: "A modern, flexible exhibition space that can be configured to suit a variety of layouts. Perfect for product launches, art exhibitions, and interactive events.",
    capacity: 800,
    price: 7000,
    imageId: "hall-samrat",
  },
    {
    id: "lotus",
    name: "The Lotus Room",
    description: "An intimate and serene setting for workshops, board meetings, or exclusive private dinners. Features natural light and garden views.",
    capacity: 50,
    price: 2500,
    imageId: "hall-lotus",
  },
  {
    id: "skyline",
    name: "The Skyline Terrace",
    description: "An open-air rooftop venue with breathtaking city views. The perfect spot for cocktail receptions, networking events, and unforgettable social gatherings under the stars.",
    capacity: 200,
    price: 6000,
    imageId: "hall-skyline",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "The team at Bharat Convention Center was phenomenal. They made our annual conference a seamless experience. The Maharaja Hall was breathtaking!",
    author: "Anjali Sharma",
    title: "CEO, Tech Innovators Inc.",
    imageId: "testimonial-2",
  },
  {
    id: "2",
    quote: "We hosted our company's gala in The Rani Suite, and it was nothing short of magical. The service was impeccable, and the venue was stunning. Highly recommended.",
    author: "Rohan Mehta",
    title: "Founder, Creative Solutions",
    imageId: "testimonial-1",
  },
  {
    id: "3",
    quote: "An absolutely world-class venue. We used the Samrat Expo for our product launch, and the flexible space allowed us to create a truly immersive experience for our guests.",
    author: "Priya Singh",
    title: "Marketing Director, Global Motors",
    imageId: "testimonial-3",
  },
    {
    id: "4",
    quote: "Planning a wedding is stressful, but the staff here made everything effortless. Our clients were overjoyed with their celebration in The Rani Suite. A dream venue!",
    author: "Aditi Rao",
    title: "Lead Wedding Planner, EverAfter Events",
    imageId: "testimonial-4",
  },
  {
    id: "5",
    quote: "The Skyline Terrace was a huge hit for our annual tech meetup. The views were incredible and provided a relaxed atmosphere for networking. We'll be back next year!",
    author: "Karan Desai",
    title: "Organizer, Innovate Delhi Meetup",
    imageId: "testimonial-5",
  },
];

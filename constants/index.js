import {
  DiscIcon,
  Dribbble,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export const NavLinkData = [
  {
    id: 0,
    label: "Home",
    path: "/",
  },
  {
    id: 1,
    label: "Works",
    path: "/works",
  },
  {
    id: 2,
    label: "Services",
    path: "#services",
  },
  {
    id: 3,
    label: "About",
    path: "#about",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "1on1 Coaching", href: "#" },
      { label: "Company Review", href: "#" },
      { label: "Accounts Review", href: "#" },
      { label: "HR Consulting", href: "#" },
      { label: "SEO Optimisation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Meet the Team", href: "#" },
      { label: "Accounts Review", href: "#" },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      { label: "Contact", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Live Chat", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Accessibility", href: "#" },
      { label: "Returns Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Hiring Statistics", href: "#" },
    ],
  },
];

// footer detail-links
export const footerDetailLinks = [
  { name: " Terms & Conditions" },
  { name: "Privacy Policy" },
  { name: "Cookies" },
];

export const footerIcons = [
  { icon: <Facebook size={25} /> },
  { icon: <Linkedin size={25} /> },
  { icon: <Twitter size={25} /> },
  { icon: <Github size={25} /> },
  { icon: <Dribbble size={25} /> },
];

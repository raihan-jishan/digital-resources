import {
  CustomerSatisfaction,
  GreatCommunication,
  HelpYou,
  QuickResponse,
} from "@/public/assets";
import {
  BotMessageSquare,
  Facebook,
  GlobeLock,
  HandshakeIcon,
  LayoutPanelLeft,
  LeafyGreen,
  LoaderPinwheel,
  Megaphone,
  NotebookPen,
  PencilRuler,
  Rocket,
  ShoppingBag,
  Slack,
  SquareChartGantt,
  Store,
  TextSearch,
} from "lucide-react";

export const HeroData = [
  {
    id: 0,
    title: "Simple Solutions for Complex Challenges",
    description:
      "We design intuitive digital tools that make your workflow easier, faster, and smarter — no matter how complex the task. ",
    btn1: "Our works",
    btn2: "Know more",
    path1:'/works',
    image: "assets/heroIllustration.gif",
  },
];

export const WhatWeProvideData = [
  {
    id: 0,
    icon: <GlobeLock size={35} />,
    label: "Web Design & Development",
    description:
      "Modern, responsive websites tailored to your brand and business goals.",
  },
  {
    id: 1,
    icon: <LayoutPanelLeft size={35} />,
    label: "App Development",
    description:
      "Creating custom mobile and web apps focused on performance, usability, and modern tech.",
  },
  {
    id: 2,
    icon: <NotebookPen size={35} />,
    label: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces for seamless digital experiences.",
  },
  {
    id: 3,
    icon: <Megaphone size={35} />,
    label: "Digital Marketing",
    description:
      "Promoting brands online through SEO, social media, content, and data-driven strategies",
  },
  {
    id: 4,
    icon: <ShoppingBag size={35} />,
    label: "E-commerce Solutions",
    description:
      "Developing online stores with secure payment and user-friendly design.",
  },
  {
    id: 5,
    icon: <TextSearch size={35} />,
    label: "SEO Services",
    description:
      "Optimizing websites to rank higher on search engines and attract traffic.",
  },
];

export const SpecialityCardData = [
  {
    id: 0,
    imageUrl: QuickResponse,
    label: "Quick Response",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius laudantium, blanditiis, esse cum commodi architecto tempora, quidem quo minus suscipit animi minima dicta! A eius ipsa fugit commodi doloremque!",
  },
  {
    id: 1,
    imageUrl: GreatCommunication,
    label: "Great Communication",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius laudantium, blanditiis, esse cum commodi architecto tempora, quidem quo minus suscipit animi minima dicta! A eius ipsa fugit commodi doloremque!   ",
  },
  {
    id: 2,
    imageUrl: CustomerSatisfaction,
    label: "Customer  Satifisfaction",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius laudantium, blanditiis, esse cum commodi architecto tempora, quidem quo minus suscipit animi minima dicta! A eius ipsa fugit commodi doloremque!  ",
  },
];

export const CompanyLogoData = [
  {
    id: 0,
    icon: <Store size={50} />,
  },
  {
    id: 1,
    icon: <Slack size={50} />,
  },
  {
    id: 2,
    icon: <LoaderPinwheel size={50} />,
  },
  {
    id: 3,
    icon: <PencilRuler size={50} />,
  },
  {
    id: 4,
    icon: <BotMessageSquare size={50} />,
  },
  {
    id: 5,
    icon: <SquareChartGantt size={50} />,
  },
  {
    id: 6,
    icon: <LeafyGreen size={50} />,
  },
  {
    id: 6,
    icon: <Rocket size={50} />,
  },
];

export const ReviewData = [
  {
    name: "Sophia Turner",
    twitter: "@sophiaturner",
    rating: 5,
    review:
      "Absolutely love the service! Super easy to use and their customer support is amazing.",
    date: "2025-08-10",
    image:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "James Holloway",
    twitter: "@jholloway",
    rating: 4,
    review:
      "Great experience overall. A few minor bugs, but nothing that breaks the flow.",
    date: "2025-07-28",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "Liam Cho",
    twitter: "@liamcho_tech",
    rating: 5,
    review:
      "Reliable, fast, and exactly what I needed for my freelance projects.",
    date: "2025-08-01",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "Emily Reyes",
    twitter: "@emilycodes",
    rating: 3,
    review:
      "Good features, but the pricing model could use more flexibility for smaller teams.",
    date: "2025-06-15",
    image:
      "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Carlos Mendes",
    twitter: "@cmendes_dev",
    rating: 4,
    review:
      "I've used many digital platforms, but this one nails the user experience.",
    date: "2025-08-12",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Nina Patel",
    twitter: "@ninaUX",
    rating: 5,
    review:
      "Clean interface, great analytics tools, and the onboarding process is flawless.",
    date: "2025-08-16",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Derek Lin",
    twitter: "@derek_linsight",
    rating: 2,
    review:
      "Promising features but too many crashes lately. Hope it improves soon.",
    date: "2025-07-04",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Hannah Kim",
    twitter: "@hannah_uiux",
    rating: 5,
    review:
      "Love the new update! The performance boost is noticeable and appreciated.",
    date: "2025-08-14",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export const WorksData = [
  {
    id: 0,
    label: "off.vstore",
    description:
      "Your go-to destination for curated streetwear, exclusive drops, and everyday essentials. Shop the latest trends with unbeatable prices and fast shipping.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/13606668/file/original-828e65a135620231018173b2b69c38ae.png?resize=850x638&vertical=center",
    path: "",
  },
  {
    id: 1,
    label: "hungry-bites",
    description:
      "Crave it. Bite it. Love it. Discover mouthwatering snacks, gourmet treats, and everyday munchies delivered to your door. Satisfaction in every bite.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/16825516/file/original-6e7d42a74d75a8552a73db9f2bed0f48.png?resize=1024x716&vertical=center",
    path: "",
  },
  {
    id: 2,
    label: "Evently",
    description:
      "Plan less, enjoy more. Your all-in-one destination for event essentials, from stylish decor to party-perfect supplies. Make every moment unforgettable.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/18417782/file/original-9e2076a0be958054a6443da0a1aa47a6.png?resize=1024x768&vertical=center",
    path: "",
  },
  {
    id: 2,
    label: "FitLife tracker",
    description:
      "Fuel your fitness journey. Shop premium activewear, wellness essentials, and gear that moves with you. Stronger starts here.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/18408584/file/original-578b7b01c6b971ec9a567fb0b81c9d7f.jpg?resize=1024x768&vertical=center",
    path: "",
  },
  {
    id: 2,
    label: "Dream home reality",
    description:
      "Turning your dream home into a reality. Explore elegant furniture, stylish décor, and smart home solutions that bring comfort and beauty to every space.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/32713059/file/original-511336ffce2cb79e93d4b8418e08067a.png?resize=1024x768&vertical=center",
    path: "",
  },
  {
    id: 3,
    label: "Edu Connect",
    description:
      "Bridging learners and educators. Access quality courses, expert tutors, and learning tools designed to empower education anytime, anywhere.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15005532/file/original-083a36440313bda4aea57dabc2b502d2.jpg?resize=1024x768&vertical=center",
    path: "",
  },
];

export const AlwaysHelpYouData = [
  {
    id: 0,
    label1: "We are here to always",
    label2: "help you",
    icon: <HandshakeIcon size={50} className="bg-green-400/10   " />,
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit.   Reprehenderit quod quos, maxime ea doloribus quisquam voluptate  exercitationem, nesciunt quidem quam temporibus adipisci eum  facilis, maiores rem aliquam nobis ab repudiandae?",
    image: HelpYou,
  },
];

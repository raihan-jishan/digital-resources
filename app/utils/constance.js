import Image from "@/public/images/heroImage.svg";
import { AiFillAndroid } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import { CiCloud } from "react-icons/ci";
import { FaChrome, FaRegComments } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { IoCameraOutline, IoHomeOutline } from "react-icons/io5";
import { LiaRobotSolid } from "react-icons/lia";
import { LuBadgeInfo, LuPencil, LuPencilRuler } from "react-icons/lu";
import { MdImageSearch, MdWorkOutline } from "react-icons/md";
import { PiHandHeartLight } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { TbBrandFlipboard } from 'react-icons/tb';
export const Navdata = [
  { id: 1, name: "Home", pathName: "/", activeIcon:<IoHomeOutline size={30} /> },
  { id: 2, name: "About", pathName: "/about", activeIcon:<LuBadgeInfo size={30} /> },
  { id: 3, name: "Services", pathName: "/services" , activeIcon:<PiHandHeartLight  size="30"/>},
  { id: 4, name: "our works", pathName: "/ourwors", activeIcon:<FiTool size={30}/>   },
  { id: 5, name: "client reviews", pathName: "/clientreviews" , activeIcon:<FaRegComments size={30}/> },
  { id: 6, name: "Our products", pathName: "/products" , activeIcon:<TbBrandFlipboard size="30"/> },
  { id: 7, name: "Contact", pathName: "/contact", activeIcon:<RiContactsLine size={30}/>  },
];
export const HeroData = [
  {
    id: 1,
    heroTitle: "Grow your",
    heroSubTitle: " bussiness with the digital resources",
    heroDescription:
      "get the our techinical servic and give the strength your bussiness to onother level...of the marketing",
    firstBtnTitle: "Get started",
    secondBtnTitle: "View creation's",
    Image: Image,
  },
];
export const serviceData = [
  {
    id: 1,
    serviceName: "web development",
    icon: <FaChrome size={60} />,
  },
  {
    id: 2,
    serviceName: "digital marketing",
    icon: <MdWorkOutline size={60} />,
  },
  {
    id: 3,
    serviceName: "content writing",
    icon: <LuPencil size={60} />,
  },
  {
    id: 4,
    serviceName: "SEO",
    icon: <MdImageSearch size={60} />,
  },
  {
    id: 5,
    serviceName: "Cloud service",
    icon: <CiCloud size={60} />,
  },
  {
    id: 6,
    serviceName: "AI",
    icon: <LiaRobotSolid size={60} />,
  },
  {
    id: 7,
    serviceName: "Machine learning",
    icon: <BsRobot size={60} />,
  },
  {
    id: 8,
    serviceName: "Grapic design",
    icon: <LuPencilRuler size={60} />,
  },
  {
    id: 9,
    serviceName: "Profetional bloger",
    icon: <IoCameraOutline size={60} />,
  },
  {
    id: 10,
    serviceName: "Android app development",
    icon: <AiFillAndroid size={60} />,
  },
];
export const ProductData = [
  {
    id: 1,
    name: "ecommerse application",
    description:
      "a fully functional ecommerse application . with the admin dashboard.",
    imageUrl: "https://images2.imgbox.com/3a/66/dDu2tOn9_o.png",
    githubCodebaseLink: "www.github.com",
    liveLink: "X",
  },
  {
    id: 2,
    name: "fully functional fitness app ",
    description: "a fitness monitoring app , with the best ui and features..",
    imageUrl: "https://thumbs2.imgbox.com/0d/41/9zkdMR0T_t.png",
    githubCodebaseLink: "www.github.com",
    liveLink: "X",
  },

  {
    id: 3,
    name: "Digital marketing options ",
    description: "we have better digital marketing option ",
    imageUrl: "https://images2.imgbox.com/68/ec/hZEaE9Jl_o.jpeg",
    githubCodebaseLink: "www.github.com",
    liveLink: "X",
    css: "none",
  },
  {
    id: 4,
    name: "best grapics design  ",
    description: "better grapics design are available.  ",
    imageUrl: "https://thumbs2.imgbox.com/83/ef/CgCeu1Hd_t.png",
    githubCodebaseLink: "www.github.com",
    liveLink: "X",
    css: "none",
  },

  {
    id: 5,
    name: "best machine learning works ",
    description: "we are provide you world class stadard ai machine learning. ",
    imageUrl: "https://thumbs2.imgbox.com/cf/b2/2VLEdAX8_t.jpg",
    githubCodebaseLink: "www.github.com",
    liveLink: "X",
    css: "none",
  },
  {
    id: 6,
    name: "all kind cloud service",
    description: "all kind server related works we are provide you. ",
    imageUrl: "https://thumbs2.imgbox.com/25/6a/ErDLfHyx_t.jpg",
    githubCodebaseLink: "www.github.com",
    liveLink: "X",
    css: "none",
  },
  {
    id: 7,
    name: " AI service ",
    description: "all kind AI related service we provide you at the same time.",
    imageUrl: "https://thumbs2.imgbox.com/d3/0b/2UTzCDIa_t.jpg",
    githubCodebaseLink: "www.github.com",
    liveLink: "X",
    css: "none",
  },
];
export const OurWorksData = [
  {
    id: 1,
    imageUrl: "https://thumbs2.imgbox.com/96/ef/dlR4A1mQ_t.jpg",
    brandName: "Marcedes Benz",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    reviewCount: "30",
    reviewData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    socialHandle: "mercedesbenz",
    iconSize: 40,
  },
  {
    id: 2,
    imageUrl: "https://images2.imgbox.com/a5/33/BNWoW2ZI_o.jpg",
    brandName: "Starbucks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    reviewCount: "40",
    reviewData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    socialHandle: "starbucks",
    iconSize: 40,
  },
  {
    id: 3,
    imageUrl: "https://thumbs2.imgbox.com/d5/d1/FuyXA76T_t.png",
    brandName: "Coke - coca-cola",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    reviewCount: "32",
    reviewData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    socialHandle: "cocacola",
    iconSize: 40,
  },
  {
    id: 4,
    imageUrl: "https://thumbs2.imgbox.com/bf/38/6ev3IB2Q_t.jpg",
    brandName: "gucci",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    reviewCount: "22",
    reviewData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    socialHandle: "gucci",
    iconSize: 40,
  },
  {
    id: 5,
    imageUrl: "https://thumbs2.imgbox.com/7e/1f/dA4vxQKd_t.png",
    brandName: "land rover",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    reviewCount: "52",
    reviewData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    socialHandle: "landrover",
    iconSize: 40,
  },
  {
    id: 6,
    imageUrl: "https://thumbs2.imgbox.com/ac/80/OzTRhfO0_t.png",
    brandName: "ecommerse app full functional ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    reviewCount: "32",
    reviewData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    socialHandle: "ecommerse",
    iconSize: 40,
  },
  {
    id: 7,
    imageUrl: "https://thumbs2.imgbox.com/93/c0/gY3Q151T_t.png",
    brandName: "matrimonial website ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    reviewCount: "62",
    reviewData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat minus ex minima, adipisci, beatae eius similique at tenetur ad possimus labore, quibusdam ducimus! Eligendi, beatae. Natus adipisci temporibus, error aperiam esse cum provident nemo neque eligendi aspernatur distinctio dolorem quidem fugit a quod dolor hic cumque illo nisi? Rem?",
    socialHandle: "matrimonial",
    iconSize: 40,
  },
];
export const ReviewData = [
  {
    id: 1,
    personImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7lekbotlHtzhyrvsH9BUhecrQE6VogJDzvKFPHd7GA&s",
    name: " jonny smith",
    description:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis commodi quis saepe ab nemo tempora in asperiores iusto eius quia?",
    reviewStar: "4.7",
  },
  {
    id: 2,
    personImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90m8xlb8iaFtbkg0x8FtfddiXdtLGo9Uk9x5cttCORg&s",
    name: " angella roy",
    description:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis commodi quis saepe ab nemo tempora in asperiores iusto eius quia?",
    reviewStar: "4.9",
  },
  {
    id: 3,
    personImage:
      "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
    name: " jhone soy",
    description:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis commodi quis saepe ab nemo tempora in asperiores iusto eius quia?",
    reviewStar: "4.4",
  },
];

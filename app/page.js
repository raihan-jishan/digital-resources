import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Review from "@/components/review";
import Service from "@/components/service";
export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-white text-black bg-white ">
      <Hero />
      <Features />
      <Service />
      <Products />
      <Review />
      <Blog />
       <Contact /> 
    </div>
  );
}

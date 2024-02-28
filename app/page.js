import ClientsReviews from './clientreviews/page';
import Contact from './contact/page';
import Hero from "./home/page";
import Ourworks from './ourwors/page';
import Products from "./products/page";
import Service from "./services/page";
export default function Home() {
  return (
    <div>
      <Hero />
      <Service /> 
      <Products /> 
      <Ourworks />  
      <ClientsReviews /> 
      <Contact />
      </div>
  );
}

import { HeroData } from "@/constants/data";
import Hero from "./ui/hero";

const Home = () => {
  return (
    <div>
      {" "}
      {HeroData.map((item) => {
        return <Hero key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Home;

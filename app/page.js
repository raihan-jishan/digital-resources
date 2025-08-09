import Hero from "@/components/Hero";
import { HeroData } from "@/constants/data";

export default function Home() {
  return (
    <div>
      {HeroData.map((item) => {
        return <Hero key={item.id} item={item} />;
      })}
    </div>
  );
}

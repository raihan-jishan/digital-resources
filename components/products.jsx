import { productCard as ProductCard } from "@/components/ui/card";
import { productData } from "@/constants";
import { Animation } from "@/global/animation";
import Wrapper from "@/global/wrapper";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { PrimaryBtn } from "./ui";
import Heading from "./ui/heading";

const Products = () => {
  return (
    <section
      className={"bg-white dark:bg-gray-900 text-black dark:text-white mt-5"}
      id="product"
    >
      <Animation>
        <Heading
          title={"products"}
          textSmall
          borderSide
          description={"Our making Products that help to grow people bussiness"}
          paragraph={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint tenetur  "
          }
        />
        <Wrapper>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0    gap-10">
              {productData.map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    path={`/productsdetails/${item.id}`}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    boxShadow
                    imageUrl={item.imageUrl}
                  />
                );
              })}
            </div>
          </div>

          {/* more button */}
          <div className="flex justify-center mt-10  max-lg:block">
            <PrimaryBtn
              text={"More Products"}
              pxFull
              roundedMedium
              path={"/"}
              icon={<TbAlignBoxLeftStretch size={25} />}
              varientHero
              shadow
              pxFullInMobile
            />
          </div>
        </Wrapper>
      </Animation>
    </section>
  );
};

export default Products;

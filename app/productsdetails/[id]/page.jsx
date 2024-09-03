"use client";
import {
  productDetailsCard as ProductCard,
  productCard as SemillarProductCard,
} from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { productDetailsData, simillarProductData } from "@/constants";
import { Animation } from "@/global/animation";
import Image from "next/image";
import { useParams } from "next/navigation";
const ProductInfo = () => {
  const { id } = useParams();
  const product = productDetailsData.find((item) => item.id === parseInt(id));
  const simillarProduct = simillarProductData.find(
    (item) => item.id === parseInt(id)
  );

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased mt-20 text-black dark:text-white">
      <Animation>
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <Image
                className="w-full dark:hidden"
                src={product.imageUrl}
                alt=""
                width={800}
                height={500}
              />

              <img
                className="w-full hidden dark:block"
                src={product.imageUrl}
                alt=""
                width={300}
                height={200}
              />
            </div>
            <ProductCard
              name={product.name}
              price={product.price}
              ratings={product.ratings}
              reviewCount={product.reviewCount}
              description={product.description}
            />
          </div>
          {/* about  product  */}
          <div className="mt-8">
            <Heading title={"about product "} />
          </div>
          <div className=" flex items-center justify-center mt-5">
            <p className=" w-11/12 text-[1.1rem]">{product.aboutProduct}</p>
          </div>
          {/* key feature */}
          <p className="m-12 mt-6 font-semibold max-lg:m-4 max-lg:mt-5">
            Key Features:
          </p>
          <p className="leading-10 m-12 mt-6   max-lg:m-4 max-lg:mt-5">
            {" "}
            {product.keyFeature}
          </p>
          {/* simillar products */}
          <div className="mt-8">
            <Heading title={"simillar product "} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900 gap-10">
            <SemillarProductCard
              path={`/`}
              title={simillarProduct.name}
              description={simillarProduct.description}
              icon={simillarProduct.icon}
              boxShadow
              imageUrl={simillarProduct.imageUrl}
            />
            <SemillarProductCard
              path={`/`}
              title={simillarProduct.name}
              description={simillarProduct.description}
              icon={simillarProduct.icon}
              boxShadow
              imageUrl={simillarProduct.imageUrl}
            />
            <SemillarProductCard
              path={`/`}
              title={simillarProduct.name}
              description={simillarProduct.description}
              icon={simillarProduct.icon}
              boxShadow
              imageUrl={simillarProduct.imageUrl}
            />
          </div>
        </div>
      </Animation>
    </section>
  );
};

export default ProductInfo;

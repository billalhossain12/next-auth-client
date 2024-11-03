/* eslint-disable @typescript-eslint/no-explicit-any */
import bannerImg from "@/assets/banner-3.jpg";
import Categories from "@/components/modules/home/Categories";
import CategoriesLoader from "@/components/modules/home/CategoriesLoader";
import ProductLoader from "@/components/modules/home/ProductLoader";
import Products from "@/components/modules/home/Products";
import Image from "next/image";
import { Suspense } from "react";

const Home = async () => {
  return (
    <main>
      <div className="flex justify-center h-[500px] mb-[5rem]">
        <Image src={bannerImg} width={1200} height={300} alt="Banner Image" />
      </div>
      <Suspense fallback={<CategoriesLoader />}>
        <Categories />
      </Suspense>

      <Suspense fallback={<ProductLoader />}>
        <Products />
      </Suspense>
    </main>
  );
};
export default Home;

import { envConfig } from "@/config/envConfig";
import { TProduct } from "@/types";

const ProductLoader = async () => {
  const res = await fetch(`${envConfig.baseApi}/products/get-products`);
  const data = await res.json();
  return (
    <section className="mb-[5rem] animate-pulse">
      <h1 className="text-[2rem] font-semibold my-[2rem] text-center">
        Popular Categories
      </h1>
      {/* Categories List  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 text-center text-[1.5rem] gap-10">
        {data?.data?.map((item: TProduct) => (
          <div
            key={item._id}
            className="border-[1px] border-gray-300 rounded-md p-3 hover:scale-105 duration-300 min-h-[400px]"
          >
            <h3 className="mb-[2rem] h-3 bg-gray-300 rounded-lg"></h3>
            <div className="h-[150px] w-[200px] bg-gray-300 mx-auto"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProductLoader;
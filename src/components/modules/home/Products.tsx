import { getAllProducts } from "@/services/getAllProducts";
import delay from "@/utils/delay";
import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  await delay(3000);
  const productsData = await getAllProducts();
  return (
    <section className="mb-[5rem] md:mx-10 mx-5">
      <h1 className="text-[2rem] font-semibold my-[2rem] text-center">
        Recent Products
      </h1>
      {/* Categories List  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 text-center text-[1.5rem] gap-10">
        {productsData?.map(({ _id, name, imgUrl }) => (
          <div
            key={_id}
            className="border-[1px] border-gray-300 rounded-md p-3 hover:scale-105 duration-300 flex flex-col justify-between"
          >
            <h3 className="mb-[2rem]">{name}</h3>
            <Image
              src={imgUrl}
              height={150}
              width={200}
              layout="responsive"
              alt="Category Image"
            />
            <div className="flex justify-center">
            <Link href={_id}>
              <button className="hover:bg-black bg-white border-[1px] border-gray-600 text-black duration-300 hover:text-white px-5 py-1 rounded-md text-[1rem]">
                Details
              </button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Products;

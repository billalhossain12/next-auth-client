/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllCategories } from "@/services/getAllCategories";
import delay from "@/utils/delay";
import Image from "next/image";

const Categories = async () => {
  await delay(3000);
  const categoriesData = await getAllCategories();
  return (
    <section className="mb-[5rem] md:mx-10 mx-5">
      <h1 className="text-[2rem] font-semibold my-[2rem] text-center">
        Popular Categories
      </h1>
      {/* Categories List  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 text-center text-[1.5rem] gap-10">
        {categoriesData?.map(({ _id, name, imgUrl }) => (
          <div
            key={_id}
            className="border-[1px] border-gray-300 rounded-md p-3 hover:scale-105 duration-300"
          >
            <h3 className="mb-[2rem]">{name}</h3>
            <Image
              src={imgUrl}
              height={150}
              width={200}
              layout="responsive"
              alt="Category Image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Categories;

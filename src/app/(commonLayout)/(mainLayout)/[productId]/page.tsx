/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSingleProductById } from "@/services/getSingleProductById";
import Image from "next/image";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { name, description, price, imgUrl } = await getSingleProductById(
    productId
  );
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-center md:flex-row">
        <div className="h-[300px] md:w-[400px] w-full">
          <Image
            src={imgUrl}
            width={200}
            height={200}
            alt={name}
            layout="responsive"
          />
        </div>
        <div className="md:ml-4 flex flex-col justify-center">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-600 mt-2">{description}</p>
          <p className="text-xl font-semibold mt-4">${price}</p>
          <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

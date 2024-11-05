"use client";
import Loading from "@/components/UI/Loading";
import { useDeleteProduct, useGetProducts } from "@/hooks/product.hooks";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import DataTable, {
  TableColumn,
  TableStyles,
} from "react-data-table-component";

type TDataRow = {
  _id: string;
  name: string;
  imgUrl: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
};

const customStyles: TableStyles = {
  headRow: {
    style: {
      fontWeight: 600,
      padding: "10px 10px",
      color: "#212529",
      textAlign: "left",
    },
  },
  head: {
    style: {
      // borderRadius: "6px 6px 0px 0px",
      borderTop: "0.824px solid #E9E9E9",
      background: "#FFF",
      fontSize: "15px",
    },
  },

  rows: {
    style: {
      // borderRadius: "6px 6px 0px 0px",
      // borderTop: "0.824px solid #E9E9E9",
      background: "#FFF",
      color: "#565656",
      padding: "10px 10px",
      fontSize: "14px",
      fontWeight: 400,
      width: "auto",
    },
  },
  pagination: {
    style: {
      boxShadow: "10px 5px 5px #ddd",
      marginBottom: "5px",
    },
  },
  table: {
    style: {
      overflow: "visible",
    },
  },
  tableWrapper: {
    style: {
      overflow: "visible",
    },
  },
  responsiveWrapper: {
    style: {
      overflowX: "auto", // table scroll on x axis
    },
  },
};

export default function ProductList() {
  const { data: productData, isPending } = useGetProducts();
  const { mutate: deleteProductApi, isPending: isPendindDeleting } =
    useDeleteProduct();
  const handleDeleteProduct = (productId: string) => {
    deleteProductApi(productId);
  };

  const columns: TableColumn<TDataRow>[] = [
    {
      name: "SL",
      selector: (row, index) => (index as number) + 1
    },
    {
      name: "Product Title",
      id: "careerId",
      cell: (row) => row.name,
      grow: 1,
    },
    {
      name: "Image",
      id: "image",
      cell: (row) => (
        <Image src={row.imgUrl} height={50} width={100} alt="Product Image" />
      ),
      grow: 1,
    },
    {
      name: "Product Description",
      id: "description",
      selector: (row) => row.description,
      grow: 3,
    },
    {
      name: "Category",
      id: "category",
      selector: (row) => row.category,
      grow: 1,
      sortable: true,
    },
    {
      name: "Price",
      id: "price",
      selector: (row) => row.price,
      grow: 1,
      sortable: true,
    },
    {
      name: "Stock",
      id: "stock",
      selector: (row) => row.stock,
      grow: 1,
      sortable: true,
    },
    {
      name: "Rating",
      id: "rating",
      selector: (row) => row.rating,
      grow: 1,
      sortable: true,
    },
    {
      name: "Action",
      id: "action",
      cell: (row) => (
        <div className="flex items-center gap-3 md:mr-14">
          <Link href="/admin/products/view/4353254325">
            <div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
              <Icon className="text-[1.5rem]" icon="carbon:view-filled" />
            </div>
          </Link>
          <div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
            <Icon className="text-[1.5rem]" icon="material-symbols:edit" />
          </div>
          <button
            disabled={isPendindDeleting}
            onClick={() => handleDeleteProduct(row._id)}
            className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer"
          >
            <Icon
              className="text-[1.5rem]"
              icon="material-symbols:delete-rounded"
            />
          </button>
        </div>
      ),
      grow: 1,
    },
  ];

  return (
    <>
      {isPendindDeleting && <Loading />}
      <section className="mb-[2.5rem] shadow-custom bg-white">
        <header className="overflow-x-auto pb-5 p-5">
          <div className="flex justify-between items-center min-w-[1100px]">
            <h3 className="text-[1.25rem] font-medium">List of Careers</h3>
            <div className="flex items-center gap-[2.5rem] flex-wrap">
              <div>
                <div className="relative">
                  <input
                    className="outline-none border-[1px] border-[#D9D9D9] pl-[2.5rem] pr-[1rem] py-[0.5rem] md:w-auto w-full"
                    type="text"
                    placeholder="Search here..."
                  />
                  <Icon
                    className="absolute left-2 top-[9px] text-primary text-[1.5rem]"
                    icon="mingcute:search-fill"
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Icon className="text-[1.3rem]" icon="mdi:filter-outline" />
                <p>Filter</p>
              </div>
              <div className="flex items-center gap-1">
                <Icon className="text-[1.3rem]" icon="lets-icons:date-range" />
                <p>Date</p>
              </div>
              <div className="flex items-center gap-1">
                <p>Status</p>
                <Icon className="text-[1.3rem]" icon="iconoir:nav-arrow-down" />
              </div>
              <button className="bg-primary px-3 py-1 text-white flex items-center gap-2">
                <span>Export</span>
                <Icon icon="material-symbols:cloud-download" />
              </button>
            </div>
          </div>
        </header>

        {/* Table  */}
        <div>
          <DataTable
            columns={columns.map((column) => ({
              ...column,
              name: (
                <div className="flex items-center justify-between">
                  <span>{column.name}</span>
                  {column.name == "Invested" && (
                    <Icon icon="solar:sort-outline" />
                  )}
                  {column.name == "Payment Status" && (
                    <Icon icon="solar:sort-outline" />
                  )}
                </div>
              ),
            }))}
            data={productData}
            customStyles={customStyles}
            paginationPerPage={10}
            pagination
            progressPending={isPending}
          />
        </div>
      </section>
    </>
  );
}

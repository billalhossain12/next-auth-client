import AddProductForm from "@/components/modules/admin/products/AddProductForm";
import ProductList from "@/components/modules/admin/products/ProductList";

const Products = () => {
  return (
    <div>
      <h3 className="text-[1.5rem] font-semibold mb-3">Products</h3>
      <AddProductForm />
      <ProductList />
    </div>
  );
};
export default Products;

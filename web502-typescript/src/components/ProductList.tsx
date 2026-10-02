import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}

export default ProductList;

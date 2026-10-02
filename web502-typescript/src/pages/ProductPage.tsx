import {useEffect, useState} from "react";
import axios from "axios";
import AddPage from './AddPage';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  const getProducts = async () => {
    const res = await axios.get(`http://localhost:3000/products?q=${search}`);
    setProducts(res.data);
  };

  const deleteProduct = async (id:string) => {
    if (!confirm("Bạn có chắc muốn xóa sản phẩm này?")){
      return;
    }
    await axios.delete(`http://localhost:3000/products/${id}`);
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, [search]);

  return (
  <div className="p-6">
    <h1 className="text-2xl font-semibold mb-6">Danh sách sản phẩm</h1>

    <input 
      className="border px-2 py-1 mb-4"
      placeholder="Tìm theo tên"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Tên</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Giá</th>
            <th className="px-4 py-2 border border-gray-300 text-left">
              Danh mục
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left">
              Tình trạng
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left">
              Hành động
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.price}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.category}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.inStock ? "Còn hàng" : "Hết hàng"}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <button onClick={() => deleteProduct(item.id)}>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default ProductPage;

import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
// import Counter from "./components/Counter";
// import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
// import ListPage from "./pages/ListPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Header logo="WEB502" />
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB502</h1>
        {/* <Counter /> */}
        {/* <ProductList />
        <ListPage /> */}
        <ProductPage/>
      </div>

      <Footer />
      <Toaster />
    </>
  );
}

export default App;

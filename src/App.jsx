import { useState } from "react";
import ProductList from "./Component/ProductList";
import ProductDetails from "./Component/ProductDetails";
import PopUP from "./Component/PopUP";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [open, setOpen] = useState(false);
  console.log(selectedProduct);
  return (
    <div className="mx-5">
      <div className="my-4">
        <h5 className="card-title fw-bold titles">Product List</h5>
      </div>
      <ProductList
        setSelectedProduct={setSelectedProduct}
        open={open}
        setOpen={setOpen}
      ></ProductList>
      <PopUP
        selectedProduct={selectedProduct}
        open={open}
        setOpen={setOpen}
      ></PopUP>
    </div>
  );
}

export default App;

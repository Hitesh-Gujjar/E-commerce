import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
function ProductDetails({ selectedProduct }) {
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${selectedProduct.id}`)
      .then((res) => res.json())
      .then((json) => setSelectedItem(json));
    console.log("selectedItem..", selectedItem);
  }, [selectedProduct]);

  return (
    <div className="container">
      <div>
        <h3>Product Details</h3>
      </div>
      <div className="">
        <div className="row align-items-center ">
          <div className="col text-center">
            <img
              src={selectedItem?.image}
              alt="product"
              style={{ width: "60%", height: "60%" }}
            ></img>
          </div>
          <div className="col">
            <div>
              <small className="bg-danger rounded px-2 fs-6 text-light">
                SALE
              </small>
            </div>
            <div className="my-3">
              <small className="text-uppercase fw-bold ">
                {selectedItem?.category}
              </small>
            </div>
            <div className="fs-6">
              <h2>{selectedItem?.title}</h2>
            </div>
            <div className="my-3">
              <small className="">Ratings: {selectedItem?.rating?.rate}</small>
            </div>
            <div className="my-3">
              <small className="text-uppercase fw-bold ">
                ${selectedItem?.price}
              </small>
            </div>

            <div className="borderArea">
              <div className="d-flex justify-content-between my-4">
                <label>Size</label>
                <select
                  class="form-select  form-select-sm"
                  aria-label="Default select example"
                  style={{ width: "50%" }}
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="text-end">
                <p>
                  <u>Size chart</u>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Qauntity</p>
                <div
                  className="d-flex justify-content-between rounded text-center px-4 shadow-sm counter"
                  style={{ width: "20%", height: "30px" }}
                >
                  <p className="text-center">+</p>
                  <p className="text-center px-2 ">0</p>
                  <p className="text-center ">-</p>
                </div>
              </div>
              <div className="text-end">
                <p>Available Count:{selectedItem?.rating?.count}</p>
              </div>
            </div>
            <div className="d-flex justify-content-end my-4">
              <Button variant="contained" color="secondary" className="mx-2 py-2">
                Add to Cart
              </Button>
              <Button variant="contained" color="secondary" className="mx-2 py-2">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

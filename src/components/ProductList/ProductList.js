import React, { useState } from "react";
import axios from "axios";

const BulkUploadButton = () => {
  const [editing, setEditing] = useState(false);
  const [products, setProducts] = useState([]);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handlePriceChange = (e, index) => {
    const newProducts = [...products];
    newProducts[index].price = e.target.value;
    setProducts(newProducts);
  };

  const handleBatchUpdate = () => {
    const data = { update: products };
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          btoa("ck_35f64c79ebe2cfd6979b6f81c103ff01135ae1b8:cs_1dd3842d9bdc656ace99007faef0bb09a4d34400"),
      },
    };

    axios
      .patch("https://demostore.mirailit.com/wp-json/wc/v3/products/batch", data, config)
      .then((response) => {
        console.log(response);
        alert("Batch update successful!");
        setEditing(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Batch update failed. Please try again.");
      });
  };

  return (
    <div>
      <button onClick={handleEdit}>{editing ? "Cancel" : "Edit"}</button>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                {editing ? (
                  <input
                    type="text"
                    value={product.price}
                    onChange={(e) => handlePriceChange(e, index)}
                  />
                ) : (
                  product.price
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editing && (
        <button onClick={handleBatchUpdate}>Update Prices</button>
      )}
    </div>
  );
};

export default BulkUploadButton;

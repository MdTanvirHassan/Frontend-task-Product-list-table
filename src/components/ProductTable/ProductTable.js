import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const ProductTable = () => {
  //! preloader
  const [preLoading, setPreLoading] = useState(false);
  useEffect(() => {
    setPreLoading(true);
    setTimeout(() => {
      setPreLoading(false);
    }, 1500);
  }, []);
  const styles = {
    height: "350px",
  };
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://demostore.mirailit.com/wp-json/wc/v3/products",
        {
          method: "GET",
          headers: {
            Authorization:
              "Basic " +
              btoa(
                "ck_35f64c79ebe2cfd6979b6f81c103ff01135ae1b8:cs_1dd3842d9bdc656ace99007faef0bb09a4d34400"
              ),
          },
        }
      );
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container  m-auto">
        <h2 className="text-center  pt-28 mb-5 text-purple-700 tracking-wider">
          Product List
        </h2>
        {preLoading ? (
          <div
            className="flex justify-center text-center items-center h-screen"
            style={styles}>
            <PuffLoader
              color="#36d7b7"
              loading={preLoading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="mt-5 text-center items-center justify-center"
            />
          </div>
        ) : (
          <table className="m-auto bg-purple-50 rounded-lg shadow-lg shadow-gray-400">
            <thead>
              <tr className="text-black border border-gray-200 p-4 shadow-lg rounded-md mt-5 py-5 bg-orange-50">
                <th className="border border-r-gray-300 py-5">Product Image</th>
                <th className="border border-r-gray-300 py-5">Product Name</th>
                <th className="border border-r-gray-300 py-5">Price</th>
              </tr>
            </thead>
            <tbody className=" ">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border border-gray-200 p-2 shadow-md rounded-md mt-5 hover:bg-gray-100">
                  <td className="border border-r-gray-200 p-2">
                    <img
                      src={product.images[0].src}
                      alt={product.name}
                      height="50px"
                      width={150}
                      className="rounded-xl"
                    />
                  </td>
                  <td className="border border-r-gray-200  text-center text-xs md:text-sm p-2">
                    {product.name}
                  </td>
                  <td className="border border-r-gray-200 text-center font-bold px-10">
                    {product.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ProductTable;

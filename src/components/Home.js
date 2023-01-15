import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable/ProductTable";
import BulkUploadButton from "./BulkUploadButton/BulkUploadButton";
import PuffLoader from "react-spinners/PuffLoader";
import { BsArrowRightCircle } from "react-icons/bs";

function Home() {
  const [showTable, setShowTable] = useState(false);
  //! preloader
  const [preLoading, setPreLoading] = useState(false);
  useEffect(() => {
    setPreLoading(true);
    setTimeout(() => {
      setPreLoading(false);
    }, 1000);
  }, []);
  const styles = {
    height: "350px",
  };
  return (
    <>
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
        <div className="container pt-5">
          <ProductTable />
          <div className="text-center  py-10">
            {!showTable ? (
              <div className=" flex home items-center justify-center">
                <button
                  className="home tagline text-center"
                  onClick={() => setShowTable(true)}>
                  Edit Prices Table <BsArrowRightCircle size={25} />
                </button>
              </div>
            ) : (
              <>
                <div className="items-center justify-center text-center">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-lg mr-2 text-center"
                    onClick={() => setShowTable(false)}>
                    Hide Edit Table
                  </button>
                </div>
                <BulkUploadButton />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

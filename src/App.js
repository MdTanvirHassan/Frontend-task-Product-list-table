import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import BulkUploadButton from "./components/BulkUploadButton/BulkUploadButton";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProductTable from "./components/ProductTable/ProductTable";
import ScrollToTop from "react-scroll-to-top";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Home from "./components/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="">
      <NavBar />
      <ScrollToTop
        className="bg-none hover:bg-none text-black font-extrabold rounded-full "
        smooth
        component={<HiOutlineChevronDoubleUp className="-ml-2" />}
      />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<ProductTable />} />
        <Route exact path="/update" element={<BulkUploadButton />} />
        <Route exact path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

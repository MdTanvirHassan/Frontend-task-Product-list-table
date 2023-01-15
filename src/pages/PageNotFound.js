import React from "react";
//import pagenotfoundImage from "../assets/pagenotfound.jpg";

const PageNotFound = () => {
  return (
    <div className="container m-auto text-center justify-center items-center py-40">
      <h3 className="text-lg tracking-wider">Oops..! 404 Page Not Found</h3>
      <p className="text-black tracking-widest p-2">
        Looks like you came to wrong page on our server
      </p>
      <div className="justify-center items-center text-center m-auto">
        {/* <img
          src={pagenotfoundImage}
          className=" items-center justify-center text-center md:ml-96"
          alt="not found"
          width={404}
        /> */}
      </div>
    </div>
  );
};

export default PageNotFound;

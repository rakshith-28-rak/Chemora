import React from "react";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      
        <div className=" ">
          <div className="flex justify-between p-[15px] ">
            <h1 className="font-greatvibes text-[60px] text-white ">Chemora</h1>

            <h1 className="font-greatvibes text-[50px] text-white , ">
              Chemistry&ensp;Beyond&ensp;Textbooks
            </h1>
          </div>

          <div className="w-[100vw] flex  justify-center items-center pt-0">
            <iframe
              className="w-[65vw] h-[65vh] m-0 "
              src="https://lottie.host/embed/86c1ea36-9fc8-49ab-8fc6-2cc5f4def015/3Qj6YAKa2i.lottie"
            ></iframe>
          </div>
        </div>

        <Navbar />
   
    </>
  );
};

export default HomePage;

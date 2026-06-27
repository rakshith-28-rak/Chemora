import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  {
    const active = "Home";

    return (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[70vw] z-50">
          <div className="flex items-center justify-around rounded-full bg-[#5C2C8A] px-2 py-1.5 shadow-xl backdrop-blur-sm">
            <button className="px-4 py-2 text-[25px] font-semibold text-white hover:bg-[#b9b0d7] hover:text-black hover:rounded-full transition-all duration-300">
              <Link to="/" >
              Home
              </Link>
            </button>
    
            <button className="px-4 py-2 text-[25px] font-semibold text-white hover:bg-[#b9b0d7] hover:text-black hover:rounded-full transition-all duration-300">
              <Link to="/">
               Our Resources
              </Link>
            </button>
    
            <button className="px-4 py-2 text-[25px] font-semibold text-white hover:bg-[#b9b0d7] hover:text-black hover:rounded-full transition-all duration-300">
              <Link to="/3d-models">
              3D Models
              </Link>
            </button>
    
            <button className="px-4 py-2 text-[25px] font-semibold text-white hover:bg-[#b9b0d7] hover:text-black hover:rounded-full transition-all duration-300">
              <Link to="/">
              Contribute
              </Link>
            </button>
    
            <button className="px-4 py-2 text-[25px] font-semibold text-white hover:bg-[#b9b0d7] hover:text-black hover:rounded-full transition-all duration-300">
              <Link to="/">
              About US
              </Link>
            </button>
          </div>
        </div>
      );
    }
};

export default Navbar;

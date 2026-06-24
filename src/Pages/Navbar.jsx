import React from "react";

const Navbar = () => {


  {
    const active = "Home";

    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[70vw]">
          <div className="flex items-center justify-around rounded-full bg-[#5C2C8A] px-2 py-1.5 shadow-xl backdrop-blur-sm">
            <button className="px-4 py-2 text-[25px] font-semibold text-white hover:bg-[#b9b0d7] hover:text-black hover:rounded-full transition-all duration-300">
              Home
            </button>
    
            <button className="px-4 py-2 text-[25px] font-semibold text-white hover:bg-[#b9b0d7] hover:text-black hover:rounded-full transition-all duration-300">
              Our Resources
            </button>
    
            <button className="px-4 py-2 text-[25px] font-semibold text-white hover:bg-[#b9b0d7] hover:text-black hover:rounded-full transition-all duration-300">
              3D Models
            </button>
    
            <button className="px-4 py-2 text-[25px] font-semibold text-white hover:bg-[#b9b0d7] hover:text-black hover:rounded-full transition-all duration-300">
              Contribute
            </button>
    
            <button className="px-4 py-2 text-[25px] font-semibold text-white hover:bg-[#b9b0d7] hover:text-black hover:rounded-full transition-all duration-300">
              About US
            </button>
          </div>
        </div>
      );
    }
};

export default Navbar;

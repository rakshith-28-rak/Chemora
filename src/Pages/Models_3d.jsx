import React from "react";
import Navbar from "./Navbar";

const Models_3d = () => {
  return (
    <>
      <div className=" w-[100vw]  h-[100vh] ">
        <Navbar />
        <div className="w-full  flex justify-center items-center">
          <h1 className="text-white  text-[7vw] pt-5 font-greatvibes">
            3D Models
          </h1>
        </div>

        <table className="w-full">
          <tr className="">
            <td className="text-3xl p-2">Methane</td>
            <td className="text-xl p-2 ">
              Molecular Formula: CH₄
              <br /> Molar Mass: 16.04 g/mol
              <br /> Molecular Geometry: Tetrahedral <br /> Bond Angle: 109.5°
            </td>
            <td className="text-xl p-2 ">
              Bond Type: Four single C–H bonds
              <br /> Physical State: Gas (at room temperature) <br />
              Color: Colorless <br />
              Uses: Fuel, natural gas, hydrogen production
            </td>
            <td>
              <iframe
                className="w-[500px] h-[420px] text-center mx-auto block"
                frameBorder="0"
                src="https://embed.molview.org/v1/?mode=balls&cid=297"
              ></iframe>
            </td>
          </tr>
          <tr>
            <td className="text-3xl">Ethane</td>
            <td className="text-xl p-2">
              Molecular Formula: C₂H₆
              <br /> Molar Mass: 30.07 g/mol
              <br /> Molecular Geometry: Tetrahedral
              <br /> Bond Angle: 109.5°
            </td>
            <td className="text-xl p-2">
              Bond Type: Six single C–H bonds and one C–C bond
              <br /> Physical State: Gas (at room temperature)
              <br /> Color: Colorless
              <br /> Uses: Fuel, refrigerant, production of ethylene
            </td>
            <td>
              <iframe
                className="w-[500px] h-[420px] mx-auto block"
                frameBorder="0"
                src="https://embed.molview.org/v1/?mode=balls&cid=6324"
              ></iframe>
            </td>
          </tr>

          <tr>
            <td className="text-3xl">Propane</td>
            <td className="text-xl p-2">
              Molecular Formula: C₃H₈
              <br /> Molar Mass: 44.10 g/mol
              <br /> Molecular Geometry: Tetrahedral
              <br /> Bond Angle: 109.5°
            </td>
            <td className="text-xl p-2">
              Bond Type: Eight single C–H bonds and two C–C bonds
              <br /> Physical State: Gas (at room temperature)
              <br /> Color: Colorless
              <br /> Uses: LPG fuel, cooking gas, heating
            </td>
            <td>
              <iframe
                className="w-[500px] h-[420px] mx-auto block"
                frameBorder="0"
                src="https://embed.molview.org/v1/?mode=balls&cid=6334"
              ></iframe>
            </td>
          </tr>
          <tr>
            <td className="text-3xl">Butane</td>
            <td className="text-xl p-2">
              Molecular Formula: C₄H₁₀
              <br /> Molar Mass: 58.12 g/mol
              <br /> Molecular Geometry: Tetrahedral
              <br /> Bond Angle: 109.5°
            </td>
            <td className="text-xl p-2">
              Bond Type: Ten single C–H bonds and three C–C bonds
              <br /> Physical State: Gas (at room temperature)
              <br /> Color: Colorless
              <br /> Uses: Lighters, camping fuel, LPG
            </td>
            <td>
              <iframe
                className="w-[500px] h-[420px] mx-auto block"
                frameBorder="0"
                src="https://embed.molview.org/v1/?mode=balls&cid=7843"
              ></iframe>
            </td>
          </tr>
        </table>
        <div>
            <br />
            <br />
            <br />
            <br />
        </div>
      </div>
    </>
  );
};

export default Models_3d;

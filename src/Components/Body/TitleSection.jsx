import React from "react";
import { TbUserHexagon } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RxDotsHorizontal } from "react-icons/rx";

const TitleSection = () => {
  return (
    <div className="bg-white  pl-6 py-4 font-sans flex justify-between pr-9 rounded-sm">
      <div className="flex space-x-4">
        <div>
          <TbUserHexagon size={25} color="#667085" />
        </div>
        <div className="text-lg font-sans font-medium text-gray-700">
          Clients
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="border border-gray-400 rounded-md flex items-center space-x-1 p-1">
          <p className="text-[12px] font-sans">Branch(Kathmandu)</p>
          <IoIosArrowDown />
        </div>
        <div>
          <RxDotsHorizontal size={30} color="#667085" />
        </div>
      </div>
    </div>
  );
};

export default TitleSection;

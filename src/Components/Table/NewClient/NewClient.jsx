import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const NewClient = ({ setNewData, total }) => {
  return (
    <div className="mt-4 flex flex-1 justify-between h-8 ">
      <div
        className="flex p-2 bg-[#7474c9] justify-center items-center rounded-md space-x-3 cursor-pointer"
        onClick={() => setNewData(true)}
      >
        <p className="text-sm font-sans text-white">New Client</p>
        <IoIosArrowDown color="white" size={15} />
      </div>
      <div className="flex font-sans text-gray-600 space-x-4">
        <div>Prospects(18)</div>
        <div className="  ">
          <p className="border-b border-green-500">Clients({total})</p>
        </div>
        <div>Archived(0)</div>
      </div>
    </div>
  );
};

export default NewClient;

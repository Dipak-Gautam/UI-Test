import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { LuChevronsUpDown } from "react-icons/lu";

const TableFilter = () => {
  return (
    <>
      <div className="text-sm font-sans pl-6 mt-5 pr-9 flex flex-1 justify-between border-b h-12  pb-5">
        <div className="flex space-x-4 ">
          <div className=" border border-gray-300 rounded-md px-2 flex items-center py-1 justify-between">
            <CiSearch color="#697387" size={25} />
            <input
              type="text"
              className=" outline-none focus:outline-none focus:shadow-none placeholder:text-gray-600 w-36"
              placeholder="Search Particular"
            />
          </div>

          <div className="flex space-x-2 items-center border border-gray-300 text-gray-600 p-1 rounded-md">
            <FiFilter color="gray" size={20} />
            <p>Filter by assigned</p>
            <IoIosArrowDown />
          </div>

          <div className="flex space-x-2 items-center border border-gray-300 text-gray-600 p-1 rounded-md">
            <IoCalendarClearOutline color="gray" size={20} />
            <p>Date</p>
            <IoIosArrowDown />
          </div>

          <div className="flex space-x-2 items-center border border-gray-300 text-gray-600 p-1 rounded-md">
            <FaCheck color="gray" size={20} />
            <p>Status</p>
            <IoIosArrowDown />
          </div>
        </div>

        <div className="flex text-gray-600 font-sans space-x-4">
          <div className="flex">
            <div className="flex space-x-1 p-1 px-4">
              <FiFilter color="gray" size={20} />
              <p>Filter</p>
            </div>
            <div className="flex space-x-1 p-1 border-l border-r border-slate-600 px-4">
              <LuChevronsUpDown color="gray" size={20} />
              <p>Short</p>
            </div>
            <div className="flex space-x-1 p-1 pl-4">
              <FiFilter color="gray" size={20} />
              <p> Saved Filter</p>
            </div>
          </div>
          <div>
            <p className="text-blue-400 font-sans font-semibold text-base pt-1 ">
              Clear
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableFilter;

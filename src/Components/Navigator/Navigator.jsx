import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxDotsHorizontal } from "react-icons/rx";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { TbUserHexagon } from "react-icons/tb";
import { PiSealCheck } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { BsCardChecklist } from "react-icons/bs";

const Navigator = () => {
  return (
    <div className="bg-white  h-flex min-w-[18%] rounded-sm overflow-hidden pl-9 space-y-5 font-sans text-xs text-slate-700 font-medium ">
      <div className="flex justify-between ">
        <div className="flex items-center space-x-2 mt-4 justify-center">
          <p className="text-gray-500 font-semibold text-lg">CRM</p>
          <p className="mt-1">
            <IoIosArrowDown size={20} color="gray" />
          </p>
        </div>
        <div>
          <div className="bg-gray-400 w-6 h-6 flex items-center justify-center rounded-sm">
            <FaAngleLeft color="white" />
          </div>
        </div>
      </div>

      <div className="mr-8 pb-2">
        <div className=" border border-gray-300 rounded-md px-2 flex items-center py-1 justify-between">
          <CiSearch color="#697387" size={25} />
          <input
            type="text"
            className=" outline-none focus:outline-none focus:shadow-none placeholder:text-gray-600 w-36"
            placeholder="Search"
          />
          <RxDotsHorizontal size={23} />
        </div>
      </div>
      <div className="mr-8 space-y-2 ">
        <div className="flex justify-between px-2 bg-[#ebeaf8] py-2 rounded-sm ">
          <div className="flex space-x-3 items-center">
            <LuLayoutPanelLeft size={23} color="#697387" />
            <div>Dashboard</div>
          </div>
          <RxDotsHorizontal size={23} />
        </div>

        <div className="flex justify-between px-2 pt-2  hover:bg-[#efeff7] pb-1 rounded-sm">
          <div className="flex space-x-3 items-center">
            <RiHome6Line size={23} color="#697387" />
            <div>Office Check-in</div>
          </div>

          <RxDotsHorizontal size={23} />
        </div>

        <div className="flex justify-between px-2 pt-2 hover:bg-[#efeff7] pb-1 rounded-sm">
          <div className="flex space-x-3 items-center">
            <RiCheckboxMultipleLine size={23} color="#697387" />
            <div>Enqueries</div>
          </div>
          <RxDotsHorizontal size={23} />
        </div>

        <div className="flex justify-between px-2 pt-2 hover:bg-[#efeff7] pb-1 rounded-sm">
          <div className="flex space-x-3 items-center">
            <TbUserHexagon size={23} color="#697387" />
            <div>Clients</div>
          </div>
          <RxDotsHorizontal size={23} />
        </div>

        <div className="flex justify-between px-2 pt-2 hover:bg-[#efeff7] pb-1 rounded-sm">
          <div className="flex space-x-3 items-center">
            <PiSealCheck size={23} color="#697387" />
            <div>Services</div>
          </div>
          <RxDotsHorizontal size={23} />
        </div>

        <div className="flex justify-between px-2 pt-2 hover:bg-[#efeff7] pb-1 rounded-sm">
          <div className="flex space-x-3 items-center">
            <CgNotes size={23} color="#697387" />
            <div>Quotation</div>
          </div>
          <RxDotsHorizontal size={23} />
        </div>

        <div className="flex justify-between px-2 pt-2 hover:bg-[#efeff7] pb-1 rounded-sm">
          <div className="flex space-x-3 items-center">
            <BsCardChecklist size={23} color="#697387" />
            <div>Tasks</div>
          </div>
          <RxDotsHorizontal size={23} />
        </div>
      </div>
    </div>
  );
};

export default Navigator;

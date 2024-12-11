import React from "react";
import { PiDotsNine } from "react-icons/pi";
import { BsPlusCircleDotted } from "react-icons/bs";
import { PiBellSimpleLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { PiGearSixLight } from "react-icons/pi";
import { BsMoon } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <div className="bg-white px-8 rounded-sm mb-2 ">
      <div className="py-5 flex justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <PiDotsNine size={30} color="black" />
          </div>
          <div className="text-2xl font-semibold">Test Project</div>
        </div>
        <div className="flex  items-center">
          <div className="flex space-x-4">
            <div className="hover:-translate-y-1 ">
              <BsPlusCircleDotted size={25} color="gray" />
            </div>
            <div className="relative hover:-translate-y-1 ">
              <PiBellSimpleLight size={25} color="gray" />
              <p className="absolute bg-green-400  text-[7px] text-white rounded-full flex w-3 h-3 justify-center items-center top-0  right-0">
                2
              </p>
            </div>
            <div className="hover:-translate-y-1 ">
              <CiMail size={25} color="gray" />
            </div>
            <div className="hover:-translate-y-1 ">
              <PiGearSixLight size={25} color="gray" />
            </div>
          </div>
          <div className="flex items-center border-l-2 border-gray-700 pl-4 space-x-4 ml-4">
            <div className="hover:-translate-y-1 ">
              <BsMoon size={25} color="gray" />
            </div>
            <div className="hover:-translate-y-1 ">
              <img
                src="Assets/cutegirl.avif"
                alt=""
                className="h-9 w-9 rounded-full"
              />
            </div>
            <div>
              <IoIosArrowDown size={25} color="gray" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

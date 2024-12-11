import React, { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { TbArrowForwardUp } from "react-icons/tb";
import data from "../../../Constants/TempData";
import TableHead from "../../../Constants/TableHead";

const DataTable = ({ newData, setNewData, setTotal, total }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rows, setRows] = useState(data);
  const [activeColumn, setActiveColumn] = useState([
    "name",
    "addedFrom",
    "tags",
    "internalId",
    "clientId",
    "phone",
    "clientPortal",
    "assignee",
    "followers",
    "status",
    "applications",
    "lastupdated",
  ]);
  const [hiddenColumn, setHiddenColumn] = useState([]);
  const [showPopover, setShowPopover] = useState(null);
  const handleHide = (item, index) => {
    const updatedColumns = activeColumn.filter((_, i) => i !== index);
    setActiveColumn(updatedColumns);
    setHiddenColumn((current) => [...current, item]);
    setShowPopover(null);
  };

  const showColumn = (item, index) => {
    const updatedColumns = hiddenColumn.filter((_, i) => i !== index);
    setHiddenColumn(updatedColumns);
    setActiveColumn((current) => [...current, item]);
  };

  const newClient = () => {
    const data = {
      name: "",
      addedFrom: "",
      tags: "",
      internalId: "",
      clientId: "",
      phone: "",
      clientPortal: "",
      assignee: "",
      followers: "",
      status: "",
      applications: "",
      lastupdated: "",
    };
    setTotal(total + 1);
    setRows((prev) => [...prev, data]);
  };
  useEffect(() => {
    if (newData) {
      newClient();
      setNewData(false);
    }
  }, [newData]);

  const handleInputChange = (rowIndex, field, value) => {
    console.log("input changes", value);
    const updatedRows = [...rows];
    updatedRows[rowIndex][field] = value;
    setRows(updatedRows);
  };

  return (
    <div className="flex flex-col grow basis-0 overflow-hidden mt-6 text-gray-500">
      <div className="overflow-x-auto overflow-y-auto grow max-h-[440px] flex">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
          <thead className="bg-gray-100 sticky top-0 text-gray-700">
            <tr>
              {activeColumn.map((item, index) => (
                <th
                  className="px-4 py-2 text-left border border-gray-300 min-w-40 max-w-40"
                  key={index}
                >
                  <p className="flex items-center justify-between">
                    <span>{TableHead[item]}</span>
                    <span>
                      <OverlayTrigger
                        trigger="click"
                        key={"left"}
                        placement={"left"}
                        show={showPopover === index}
                        onToggle={() =>
                          setShowPopover(showPopover === index ? null : index)
                        }
                        overlay={
                          <Popover id={`popover-positioned-left`}>
                            <Popover.Body>
                              <div className="border bg-white  shadow-md shadow-black/30 w-28 text-center ">
                                <p
                                  className="p-1 hover:bg-cyan-50"
                                  onClick={() => {
                                    handleHide(item, index),
                                      (trigger = "click");
                                  }}
                                >
                                  Hide
                                </p>
                                <hr />
                                <p className="p-1 bg-slate-200">Delete</p>
                                <hr />
                                <p className="p-1 bg-slate-200">Edit</p>
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <Button variant="secondary">
                          <HiDotsVertical />
                        </Button>
                      </OverlayTrigger>
                    </span>
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="odd:bg-white even:bg-gray-50 
              p-0"
              >
                {activeColumn.map((field, Index) => (
                  <td key={Index} className=" border border-gray-300">
                    {field == "status" ? (
                      <select
                        value={item[field]}
                        onChange={(e) =>
                          handleInputChange(rowIndex, field, e.target.value)
                        }
                        className={`px-4 py-1 h-9  hover:outline outline-1 hover:outline-blue-500 w-full text-white ${
                          item[field] == "Completed" && "bg-[#4ac86e]"
                        } ${item[field] == "In Progress" && "bg-[#4786e7]"} ${
                          item[field] == "" && "bg-slate-400"
                        }
                             
                        `}
                      >
                        <option value="" className="bg-slate-400">
                          Select Status
                        </option>
                        <option value="In Progress" className="bg-slate-400">
                          In Progress
                        </option>
                        <option value="Completed" className="bg-slate-400">
                          Completed
                        </option>
                      </select>
                    ) : (
                      <>
                        {(field == "name" || field == "assignee") && (
                          <div className="flex space-x-3 ">
                            <div className="m-1 flex border rounded-full overflow-hidden bg-pink-400 text-white   text-[12px] w-7 text-center items-center justify-center">
                              {item[field].slice(0, 1)}
                            </div>
                            <div className="text-[10px]">
                              <input
                                type="text"
                                value={item[field]}
                                onChange={(e) =>
                                  handleInputChange(
                                    rowIndex,
                                    field,
                                    e.target.value
                                  )
                                }
                                className="  hover:outline outline-1 hover:outline-blue-500 text-sm text-gray-700"
                              />
                              <p className="text-[12px]">
                                {field == "name"
                                  ? "example@gmail.com"
                                  : "Interface Studies pty"}
                              </p>
                            </div>
                            {field == "assignee" && (
                              <div className="flex justify-center items-center pr-4">
                                <TbArrowForwardUp size={20} />
                              </div>
                            )}
                          </div>
                        )}
                        {field != "name" && field != "assignee" && (
                          <div className="flex">
                            <input
                              type={`${
                                field == "lastupdated" ? "date" : "text"
                              }`}
                              value={item[field]}
                              onChange={(e) =>
                                handleInputChange(
                                  rowIndex,
                                  field,
                                  e.target.value
                                )
                              }
                              className="px-4 py-1 hover:outline outline-1 hover:outline-blue-500"
                            />
                            {field == "followers" && (
                              <div className="flex justify-center items-center pr-4">
                                <TbArrowForwardUp size={20} />
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Dropdown
            show={isDropdownOpen}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            <Dropdown
              id="dropdown-button-dark-example1"
              className="px-4 py-2 text-left border border-gray-300 min-w-40 max-w-40 bg-gray-100 text-gray-600"
            >
              + Add Column
            </Dropdown>
            {isDropdownOpen && (
              <Dropdown className="flex-row">
                <div className="border rounded-sm border-gray-500 ">
                  {hiddenColumn.length == 0 ? (
                    <div className="text-xs font-sans p-2">
                      Therer are no column to add first hide coulum
                    </div>
                  ) : (
                    <>
                      {hiddenColumn.map((item, index) => (
                        <p
                          className="hover:bg-cyan-50 text-center py-1 text-xs font-sans"
                          onClick={() => showColumn(item, index)}
                        >
                          {TableHead[item]}
                        </p>
                      ))}
                    </>
                  )}
                </div>
              </Dropdown>
            )}
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

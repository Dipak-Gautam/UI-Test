import React from "react";
import TableFilter from "./TableFilter";
import Table from "../../Table/Table";

const TableSection = () => {
  return (
    <div className="flex bg-white flex-col flex-1">
      <div>
        <TableFilter />
      </div>

      <Table />
    </div>
  );
};

export default TableSection;

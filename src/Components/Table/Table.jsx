import React, { useState } from "react";
import NewClient from "./NewClient/NewClient";
import DataTable from "./DataTable/DataTable";

const Table = () => {
  const [newData, setNewData] = useState(false);
  const [total, setTotal] = useState(7);
  return (
    <div className=" flex-col flex-1 px-6 pr-9">
      <NewClient setNewData={setNewData} total={total} />
      <DataTable
        setNewData={setNewData}
        newData={newData}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
};

export default Table;

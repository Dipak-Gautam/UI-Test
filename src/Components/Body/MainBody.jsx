import React, { useState } from "react";
import TitleSection from "./TitleSection";
import TableSection from "./TableSection/TableSection";

const MainBody = () => {
  return (
    <div className="flex flex-col flex-1 space-y-2 max-w-[81%] ">
      <TitleSection />
      <TableSection />
    </div>
  );
};

export default MainBody;

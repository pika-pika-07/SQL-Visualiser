import React from "react";
import DataTable from "./DataTable";
import SQLInput from "./SQLInput";

const MainContent = () => {
  return (
    <div className="border border-black w-10/12 flex flex-col">
      <SQLInput />
      <DataTable />
    </div>
  );
};

export default MainContent;

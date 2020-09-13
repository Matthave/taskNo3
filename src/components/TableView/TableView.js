import React from "react";
import TableBody from "./tbody/TableBody";
import TableHead from "./thead/TableHead";

function TableView({ vatInputChange }) {
  return (
    <table className="table">
      <TableHead />
      <TableBody vatInputChange={vatInputChange} />
    </table>
  );
}

export default TableView;

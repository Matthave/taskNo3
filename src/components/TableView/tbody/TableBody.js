import React from "react";

function TableBody({ vatInputChange }) {
  return (
    <tbody className="table__tableBody">
      <tr className="table__trBody default">
        <th className="table__bodyEle">
          <input className="table__inputEle" />
        </th>
        <th className="table__bodyEle">
          <input className="table__inputEle" type="number" min="1" />
        </th>
        <th className="table__bodyEle">
          <input
            className="table__inputEle"
            onChange={(e) => vatInputChange(e, "nettoElement")}
          />
        </th>
        <th className="table__bodyEle">
          <select
            className="table__inputEle table__selectEle"
            onChange={(e) => vatInputChange(e, "vatElement")}
          >
            <option value="0" defaultValue></option>
            <option value="8">8%</option>
            <option value="23">23%</option>
            <option value="32">32%</option>
          </select>
        </th>
        <th className="table__bodyEle">
          <input
            className="table__inputEle table__inputEle--disabled"
            disabled
          />
        </th>
      </tr>
    </tbody>
  );
}

export default TableBody;

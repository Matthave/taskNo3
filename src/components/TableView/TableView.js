import React from "react";
import Table from "../../containers/Table/Table";

function TableView() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table__headEle">Produkt</th>
          <th className="table__headEle">Ilość</th>
          <th className="table__headEle">Cena Netto</th>
          <th className="table__headEle">VAT</th>
          <th className="table__headEle">Cena Brutto</th>
        </tr>
      </thead>
      <tbody className="table__tableBody">
        <tr className="table__trBody default">
          <th className="table__bodyEle">
            <input className="table__inputEle" />
          </th>
          <th className="table__bodyEle">
            <input className="table__inputEle" />
          </th>
          <th className="table__bodyEle">
            <input className="table__inputEle" />
          </th>
          <th className="table__bodyEle">
            <input className="table__inputEle" />
          </th>
          <th className="table__bodyEle">
            <input className="table__inputEle" />
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default TableView;

import React from "react";

function TableHead() {
  return (
    <thead>
      <tr>
        <th className="table__headEle">Produkt</th>
        <th className="table__headEle">Ilość</th>
        <th className="table__headEle">Cena Netto</th>
        <th className="table__headEle">VAT</th>
        <th className="table__headEle">Cena Brutto</th>
      </tr>
    </thead>
  );
}

export default TableHead;

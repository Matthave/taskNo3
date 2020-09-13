import React from "react";

function AddButtonView({ addNewRowFunc }) {
  return (
    <button className="addBtn" onClick={() => addNewRowFunc()}>
      Add New Row
    </button>
  );
}

export default AddButtonView;

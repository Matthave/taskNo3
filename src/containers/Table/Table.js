import React, { Component } from "react";
import AddButtonView from "../../components/AddButton/AddButtonView";
import TableView from "../../components/TableView/TableView";
// import PropTypes from 'prop-types'

class Table extends Component {
  addNewRowFunc = () => {
    const tableBody = document.querySelector(".table__tableBody");
    const cloneIt = document.querySelector(".default");
    const clonedEle = cloneIt.cloneNode(true);
    const cloneEleChildrenArr = [...clonedEle.children];
    cloneEleChildrenArr.forEach((ele) => {
      ele.children[0].value = "";
    });
    tableBody.appendChild(clonedEle);
  };
  render() {
    return (
      <div className="main">
        <TableView />
        <AddButtonView addNewRowFunc={this.addNewRowFunc} />
      </div>
    );
  }
}
export default Table;

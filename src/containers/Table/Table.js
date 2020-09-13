import React, { Component } from "react";
import AddButtonView from "../../components/AddButton/AddButtonView";
import SendButtonView from "../../components/SendButton/SendButtonView";
import TableView from "../../components/TableView/TableView";
// import PropTypes from 'prop-types'

class Table extends Component {
  state = {
    sendFormResult: "",
  };

  inputsValidationFunc = () => {
    const sendMessage = document.querySelector(".sendResult");
    const everyInput = document.querySelectorAll(".table__inputEle");
    const everyInputArr = [...everyInput];

    if (everyInputArr.some((ele) => ele.value === "")) {
      this.setState({ sendFormResult: "Every field is required!" });
      sendMessage.classList.add("sendResult--fail");
    } else {
      this.setState({ sendFormResult: "Form has been sent successfully" });
      everyInputArr.forEach((ele) => (ele.value = ""));
      sendMessage.classList.remove("sendResult--fail");
      sendMessage.classList.add("sendResult--success");
    }
  };

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
        <SendButtonView inputsValidationFunc={this.inputsValidationFunc} />
        <h2 className="sendResult">{this.state.sendFormResult}</h2>
      </div>
    );
  }
}
export default Table;

import React, { Component } from "react";
import AddButtonView from "../../components/AddButton/AddButtonView";
import SendButtonView from "../../components/SendButton/SendButtonView";
import TableView from "../../components/TableView/TableView";

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

    //Add eventListener for new VAT element in new row
    clonedEle.children[3].children[0].addEventListener("click", (e) =>
      this.vatInputChange(e)
    );

    //Make new row clean of default value
    const cloneEleChildrenArr = [...clonedEle.children];
    cloneEleChildrenArr.forEach((ele) => {
      ele.children[0].value = "";
    });
    tableBody.appendChild(clonedEle);
  };

  vatInputChange = (e) => {
    const thisTrNettoPrice =
      e.target.parentNode.parentNode.children[2].children[0].value;

    e.target.parentNode.parentNode.children[4].children[0].value =
      Number(thisTrNettoPrice) + (e.target.value / 100) * thisTrNettoPrice;
  };
  render() {
    const { sendFormResult } = this.state;
    return (
      <div className="main">
        <TableView vatInputChange={this.vatInputChange} />
        <AddButtonView addNewRowFunc={this.addNewRowFunc} />
        <SendButtonView inputsValidationFunc={this.inputsValidationFunc} />
        <h2 className="sendResult">{sendFormResult}</h2>
      </div>
    );
  }
}
export default Table;

import React, { Component } from "react";
import AddButtonView from "../../components/AddButton/AddButtonView";

export class AddButton extends Component {
  addNewRowFunc = () => {
    const tableBody = document.querySelector(".table__tableBody");
    const cloneIt = document.querySelector(".default");
    const clonedEle = cloneIt.cloneNode(true);
    const { vatInputChange, isEveryInputCompleteFunc } = this.props;

    //Make new row clean of default value
    const cloneEleChildrenArr = [...clonedEle.children];
    cloneEleChildrenArr.forEach((ele) => {
      ele.children[0].value = "";
    });
    //Add eventListener for new VAT and Netto in new row
    clonedEle.children[3].children[0].addEventListener("click", (e) =>
      vatInputChange(e, "vatElement")
    );
    clonedEle.children[2].children[0].addEventListener("keyup", (e) =>
      vatInputChange(e, "nettoElement")
    );
    tableBody.appendChild(clonedEle);
    isEveryInputCompleteFunc();
  };
  render() {
    return <AddButtonView addNewRowFunc={this.addNewRowFunc} />;
  }
}

export default AddButton;

import React, { Component } from "react";
import AddButton from "../../containers/AddButton/AddButton";
import SendButtonView from "../../components/SendButton/SendButtonView";
import TableView from "../../components/TableView/TableView";

class Table extends Component {
  state = {
    sendFormResult: false,
    everyInputComplete: false,
  };
  componentDidMount() {
    window.addEventListener("keyup", () => this.isEveryInputCompleteFunc());
  }
  componentWillUnmount() {
    window.removeEventListener("keyup", () => this.isEveryInputCompleteFunc());
  }

  inputsValidationFunc = () => {
    const sendMessage = document.querySelector(".sendResult");
    const everyInput = document.querySelectorAll(".table__inputEle");
    const everyInputArr = [...everyInput];

    this.sendMessageFunc();
    everyInputArr.forEach((ele) => (ele.value = ""));
    sendMessage.classList.add("sendResult--success");
  };

  vatInputChange = (e, changeFromEle) => {
    const target = e.target;
    const thisTrNettoPrice =
      target.parentNode.parentNode.children[2].children[0].value;
    if (changeFromEle === "vatElement") {
      target.parentNode.parentNode.children[4].children[0].value =
        Number(thisTrNettoPrice) + (target.value / 100) * thisTrNettoPrice;
    } else {
      const thisTrNettoPrice = e.target.value;
      const thisTrVAT =
        target.parentNode.parentNode.children[3].children[0].value;

      target.parentNode.parentNode.children[4].children[0].value =
        Number(thisTrNettoPrice) + (thisTrVAT / 100) * thisTrNettoPrice;
    }

    if (
      target.parentNode.parentNode.children[4].children[0].value === "0" ||
      target.parentNode.parentNode.children[4].children[0].value ===
        thisTrNettoPrice
    ) {
      target.parentNode.parentNode.children[4].children[0].value = "";
    }
    this.isEveryInputCompleteFunc();
  };

  isEveryInputCompleteFunc = () => {
    const everyInput = document.querySelectorAll(".table__inputEle");
    const everyInputArr = [...everyInput];
    if (everyInputArr.some((ele) => ele.value === "")) {
      this.setState({ everyInputComplete: false });
    } else {
      this.setState({ everyInputComplete: true });
    }
  };

  sendMessageFunc = () => {
    this.setState({
      sendFormResult: !this.state.sendFormResult,
      everyInputComplete: false,
    });
    setTimeout(() => {
      this.setState({ sendFormResult: !this.state.sendFormResult });
    }, 3000);
  };

  render() {
    const { sendFormResult, everyInputComplete } = this.state;
    return (
      <div className="main">
        <TableView
          vatInputChange={this.vatInputChange}
          isEveryInputCompleteFunc={this.isEveryInputCompleteFunc}
        />
        <AddButton
          vatInputChange={this.vatInputChange}
          isEveryInputCompleteFunc={this.isEveryInputCompleteFunc}
        />
        <SendButtonView
          inputsValidationFunc={this.inputsValidationFunc}
          disabled={everyInputComplete ? false : true}
        />

        <h2 className="sendResult">
          {sendFormResult ? "Form has been sent successfully" : null}
        </h2>
      </div>
    );
  }
}
export default Table;

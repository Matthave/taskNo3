import React from "react";

function SendButton({ inputsValidationFunc }) {
  return (
    <button className="sendBtn" onClick={() => inputsValidationFunc()}>
      Send Form
    </button>
  );
}

export default SendButton;

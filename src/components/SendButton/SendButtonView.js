import React from "react";

function SendButton({ inputsValidationFunc, disabled }) {
  return (
    <button
      className={`${disabled ? "sendBtn sendBtn--disabled" : "sendBtn"}`}
      onClick={() => inputsValidationFunc()}
    >
      Send Form
    </button>
  );
}

export default SendButton;

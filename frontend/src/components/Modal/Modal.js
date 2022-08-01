import React from "react";
import "./Modal.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal-wrap active" : "modal-wrap"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

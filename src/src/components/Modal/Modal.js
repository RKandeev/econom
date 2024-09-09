import React from "react";
import "./Modal.scss";

function Modal({ active, SetActive, children, modalTitle }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => SetActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <div className="modal_title">{modalTitle}</div>
          <div className="closeModal" onClick={() => SetActive(false)}>
            &#215;
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;

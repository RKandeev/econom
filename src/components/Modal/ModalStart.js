import React from "react";

import "./Modal.scss";
function ModalStart({ active, SetActive, children, modalTitle }) {
  return (
    <>
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => SetActive(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  );
}

export default ModalStart;

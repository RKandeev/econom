import React from "react";

import "./Modal.scss";
function ModalStart({ active, setActive, children, modalTitle }) {
  return (
    <>
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  );
}

export default ModalStart;

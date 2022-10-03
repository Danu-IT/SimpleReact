import React from "react";

import classes from "./MyModal.module.css";

const MyModal = ({ children, visibleModal, setVisibleModal }) => {

  const rootClasses = [classes.modal];
  if (visibleModal){
    rootClasses.push(classes.active)
  }
    return (
      <div onClick={() => setVisibleModal(false)} className={rootClasses.join(" ")}>
        <div onClick={(e) => e.stopPropagation()} className={classes.modalContent}>{children}</div>
      </div>
    );
};

export default MyModal;

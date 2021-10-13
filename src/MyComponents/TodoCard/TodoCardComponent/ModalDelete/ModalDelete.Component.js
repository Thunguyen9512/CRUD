import React from "react";

import "./ModalDelete.Component.css";

const ModalDelete = (props) => {
  const { modalOpen, toggleModalState, id, handleDeleteButtonOnClick } = props;
  console.log(props);
  const deleteButtonOnClick = () => {
    handleDeleteButtonOnClick(id);
    toggleModalState();
  };
  if (modalOpen) {
    return (
      <div className="modal-screen">
        <div className="modal-container">
          <p>Do you really want to delete this task</p>
          <button
            onClick={toggleModalState}
            className="modal__close-button none-style-button close-button"
          >
            <i className="fas fa-times-circle fa-sm"></i>
          </button>
          <button
            onClick={deleteButtonOnClick}
            className="modal__delete-button"
          >
            Delete
          </button>
        </div>
      </div>
    );
  } else return null;
};
export default ModalDelete;

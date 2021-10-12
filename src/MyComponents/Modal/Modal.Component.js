import { Button } from "LibComponents";
import React from "react";

import './Modal.Component.css'

const Modal = (props) => {
  const { modalOpen, toggleModalState } = props
  console.log('modal', modalOpen)
  if (modalOpen) {
    return (
      <div className='modal-screen'>
        <div className='modal-container'>
          <p>Do you really want to delete this task</p>
          <button onClick = {toggleModalState} className='modal__close-button none-style-button close-button'><i class="fas fa-times-circle fa-sm"></i></button>
          <button onClick = {toggleModalState} className='modal__delete-button'>Delete</button>
        </div>
      </div>
    )
  } else return null;

};
export default Modal;

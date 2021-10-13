import React, { useState } from "react";
import "./TodoItem.Container.css";
import { Tag } from "LibComponents";
import { ModalDelete, ModalEdit } from "..";

const TodoItem = (props) => {
  const { todoItem, handleDeleteButtonOnClick, handleUpdate } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);

  const toggleModalState = () => {
    setModalOpen(!modalOpen);
  };
  const toggleModalEditState = () => {
    setModalEditOpen(!modalEditOpen);
  };
  return (
    <>
      <div className="todo-item">
        <a href="#" onClick={toggleModalEditState}>
          <h3>{todoItem.title}</h3>
        </a>
        <div className="description-block">
          {todoItem.description.map((item, index) => (
            <Tag key={index} className="description-item" color={item.value}>
              {item.label}
            </Tag>
          ))}
        </div>
        <button
          onClick={toggleModalState}
          className="delete-button none-style-button close-button"
        >
          <i className="fas fa-times-circle fa-sm"></i>
        </button>
      </div>
      <ModalDelete
        modalOpen={modalOpen}
        toggleModalState={toggleModalState}
        id={todoItem.id}
        handleDeleteButtonOnClick={handleDeleteButtonOnClick}
      />
      <ModalEdit
        editItem={todoItem}
        modalEditOpen={modalEditOpen}
        toggleModaEditState={toggleModalEditState}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default TodoItem;

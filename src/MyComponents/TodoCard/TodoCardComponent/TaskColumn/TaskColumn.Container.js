import React, { useState } from "react";
import { AddTodoItem, TodoItem } from "..";
import "./TaskColumn.Container.css";

const TaskColumn = (props) => {
  const {
    initialList,
    handleDeleteButtonOnClick,
    handleAddButtonOnClick,
    handleUpdate,
    status,
    title,
  } = props;
  const renderList = initialList.filter((item) => item.status === status); //filter list from initial list
  const [openAddTodoItem, setOpenAddTodoItem] = useState(false); 

  const toggleAddTodoItem = () => {
    setOpenAddTodoItem(!openAddTodoItem);
  };

  return (
    <div className="container background-color3">
      <div className="container__header">
        <h3>{title}</h3>
        <button
          className="none-style-button add-new"
          onClick={toggleAddTodoItem}
        >
          <i className="fas fa-plus-square fa-lg"></i>
        </button>
      </div>
      <div className="container__todo-list">
        <AddTodoItem
          openAddTodoItem={openAddTodoItem}
          toggleAddTodoItem={toggleAddTodoItem}
          handleAddButtonOnClick={handleAddButtonOnClick}
          status={status}
        />

        {renderList.map((item, index) => (
          <TodoItem
            key={item.id}
            todoItem={item}
            handleDeleteButtonOnClick={handleDeleteButtonOnClick}
            handleAddButtonOnClick={handleAddButtonOnClick}
            handleUpdate={handleUpdate}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;

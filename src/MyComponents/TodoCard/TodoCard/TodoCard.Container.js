import { taskList } from "Constants";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskColumn } from "../TodoCardComponent";
import "./TodoCard.Container.css";

const TodoCard = () => {
  //initial list
  const [initialList, setInitialList] = useState([
    {
      title: "UI task",
      status: "Open",
      description: [
        { value: "#8B008B", label: "UI" },
        { value: "#8B0000", label: "API" },
      ],
      id: "123",
    },
    {
      title: "Logic task",
      status: "In Progress",
      description: [
        { value: "#8B008B", label: "UI" },
        { value: "#8B0000", label: "API" },
      ],
      id: "234",
    },
    {
      title: "Apply State Manager",
      status: "Done",
      description: [
        { value: "#8B008B", label: "UI" },
        { value: "#8B0000", label: "API" },
      ],
      id: "456",
    },
  ]);

  //handle Delete todo item
  const handleDeleteButtonOnClick = (id) => {
    let temp = [...initialList];
    temp = temp.filter((item) => item.id !== id);
    setInitialList(temp);
  };

  //handle Add todo item
  const handleAddButtonOnClick = (values) => {
    const newItem = {
      title: values.title,
      description: [],
      status: values.status,
      id: uuidv4(),
    };

    let temp = [...initialList];
    temp.push(newItem);
    setInitialList(temp);
  };

  //handle update description
  const handleUpdate = (updatedItem) => {
    console.log("add description", updatedItem);
    let temp = [...initialList];
    temp.forEach((item, index) => {
      if (item.id === updatedItem.id) {
        temp[index] = { ...updatedItem };
        return;
      }
    });
    setInitialList(temp);
  };

  return (
    <div className="home">
      <div className="home-container">
        {taskList.map((item,index) => (
          <TaskColumn
            key={index}
            title={item}
            status={item}
            initialList={initialList}
            handleDeleteButtonOnClick={handleDeleteButtonOnClick}
            handleAddButtonOnClick={handleAddButtonOnClick}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoCard;

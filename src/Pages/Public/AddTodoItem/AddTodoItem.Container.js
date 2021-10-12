import { Form, Input, Button } from "LibComponents";

import React from "react";
import "./AddTodoItem.Container.css";

const AddTodoItem = (props) => {
  const { openAddTodoItem, toggleAddTodoItem } = props;
  if (openAddTodoItem) {
    return (
      <div className="add-container">
        <button
          onClick={toggleAddTodoItem}
          className="none-style-button close-button"
        >
          <i class="fas fa-times-circle fa-sm"></i>
        </button>
        <Form layout="vertical">
          <Form.Item label="Title">
            <Input placeholder = 'Input title here' />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  } else return null;
};

export default AddTodoItem;

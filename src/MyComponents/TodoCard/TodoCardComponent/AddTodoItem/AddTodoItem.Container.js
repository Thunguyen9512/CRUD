import { Form, Input, Button } from "LibComponents";

import React from "react";
import "./AddTodoItem.Container.css";

const AddTodoItem = (props) => {

  const { openAddTodoItem, toggleAddTodoItem, handleAddButtonOnClick, status } = props;
  const [formAdd] = Form.useForm();

  if (openAddTodoItem) {
    return (
      <div className="add-container">
        <button
          onClick={toggleAddTodoItem}
          className="none-style-button close-button"
        >
          <i className="fas fa-times-circle fa-sm"></i>
        </button>
        <Form
          form={formAdd}
          layout="vertical"
          onFinish={(values) => handleAddButtonOnClick({ ...values, status })}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input placeholder="Input title here" />
          </Form.Item>
          <Button onClick={() => formAdd.submit()} type="primary">
            Submit
          </Button>
        </Form>
      </div>
    );
  } else return null;
};

export default AddTodoItem;

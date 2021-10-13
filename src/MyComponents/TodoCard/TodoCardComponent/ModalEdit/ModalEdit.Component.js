import { Select, Tag } from "antd";
import "antd/dist/antd.css";
import { descriptionList } from "Constants";
import { Button, Form, Input } from "LibComponents";
import React from "react";
import "./ModalEdit.Component.css";

const ModalEdit = (props) => {
  const { editItem, modalEditOpen, toggleModaEditState, handleUpdate } = props;

  const defaultDescription = editItem.description.map((item) => item.value);

  const [formEdit] = Form.useForm();

  function tagRender(props) {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }

  if (modalEditOpen) {
    function onFinish(values) {
      const description = values.description;
      //map form description get from form to newDescription
      const newDescription = [];
      if (description) {
        descriptionList.forEach((descriptionItem) => {
          description.forEach((valueItem) => {
            if (descriptionItem.value === valueItem) {
              newDescription.push(descriptionItem);
            }
          });
        });
      }
      
      // update new value to item
      const updatedItem = { ...editItem };
      updatedItem.title = values.title;
      updatedItem.description = [...newDescription];
      
      // call props funciton to update item from list
      handleUpdate(updatedItem);
    }

    return (
      <div className="modal-screen">
        <div className="modal-description">
          {/* <div className="modal-description__title"></div> */}
          <div className="modal-description__list">
            <Form
              className="update-form"
              form={formEdit}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{ title: editItem.title }}
            >
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input title!",
                  },
                ]}
              >
                <Input
                  className="form-title"
                  bordered={false}
                  size="large"
                  maxLength={30}
                />
              </Form.Item>
              <Form.Item label="Add description" name="description">
                <Select
                  tagRender={tagRender}
                  mode="tags"
                  defaultValue={defaultDescription}
                  style={{ width: "100%" }}
                  tokenSeparators={[","]}
                  options={descriptionList}
                ></Select>
              </Form.Item>
            </Form>
            <Button
              className="update-button"
              onClick={() => formEdit.submit()}
              type="primary"
              size="small"
            >
              Update
            </Button>
          </div>
          <button
            onClick={toggleModaEditState}
            className="none-style-button close-button"
          >
            <i className="fas fa-times-circle fa-sm"></i>
          </button>
        </div>
      </div>
    );
  } else return null;
};
export default ModalEdit;

import { descriptionList } from "Constants";
import React from "react";
import "antd/dist/antd.css";
import { Select, Tag } from "antd";

import "./ModalDescription.Component.css";

const ModalDescription = (props) => {
  const { modalDescriptionOpen, toggleModaDescriptionState, title } = props;

  function tagRender(props) {
    const { label, value, closable, onClose } = props;
    console.log("prop", props);
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

  if (modalDescriptionOpen) {
    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return (
      <div className="modal-screen">
        <div className="modal-description">
          <div className="modal-description__title">
            <h3 style={{ color: "white" }}>{title}</h3>
          </div>
          <div className="modal-description__list">
            <p>Add description</p>
            <Select
              tagRender={tagRender}
              mode="multiple"
              defaultValue={[]}
              style={{ width: "100%" }}
              onChange={handleChange}
              tokenSeparators={[","]}
              options={descriptionList}
            ></Select>
          </div>
          <button
            onClick={toggleModaDescriptionState}
            className="none-style-button close-button"
          >
            <i class="fas fa-times-circle fa-sm"></i>
          </button>
        </div>
      </div>
    );
  } else return null;
};
export default ModalDescription;

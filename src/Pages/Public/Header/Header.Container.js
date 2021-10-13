import React from "react";

import "./Header.Container.css";
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>
          <i className="fas fa-check"></i>Task List
        </h1>
        <p>Use this template to track your personal tasks.</p>
        <p>Click an existing task to add additional context or subtasks.</p>
      </div>
    </header>
  );
};
export default Header;

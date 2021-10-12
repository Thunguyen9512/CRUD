import React, { useState } from "react";
import { AddTodoItem } from "../AddTodoItem";
import { TodoItem } from "../TodoItem";
import './Todo.Container.css'

const initialTodoList = [
  {
    title: 'Drag and drop', description: {
      dueDay: 'Thusday', timeTracking: '6h'
    }
  },
]

const Open = () => {
  const [openAddTodoItem, setOpenAddTodoItem] = useState(false)
  const toggleAddTodoItem = () => {
    setOpenAddTodoItem(!openAddTodoItem)
  }
  return (
    <div className='container background-color3'>
      <div className='container__header'>
        <h3>Open</h3>
        <button className = 'none-style-button add-new' onClick = {toggleAddTodoItem}><i class="fas fa-plus-square fa-lg"></i></button>
      </div>
      <div className='container__todo-list'>
        <AddTodoItem openAddTodoItem={openAddTodoItem} toggleAddTodoItem={toggleAddTodoItem} />
        {initialTodoList.map((item, index) => (
          <TodoItem key={index} title={item.title} description={item.description} index={index}></TodoItem>
        ))}
      </div>
    </div>
  )
};

export default Open;

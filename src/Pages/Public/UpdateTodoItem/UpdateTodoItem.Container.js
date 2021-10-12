import React from "react";
import './UpdateTodoItem.Container.css'

const UpdateTodoItem = (props) => {
    const {title, description} = props
    return (
        <div className = 'update-item-container'>
            <div className = 'update-item-container__title'>
                <h2>{title}</h2>
            </div>
            <div className = 'update-item-container__description'>
                <div className = 'description-item'>
                    
                </div>
            </div>
        </div>
    )
};

export default UpdateTodoItem;

import React, { useState } from "react";
import './TodoItem.Container.css'
import { Modal, ModalDescription } from '../../../MyComponents'
import { Tag } from "LibComponents";


const TodoItem = (props) => {
    const { title, description, index } = props;
    console.log('props', description.dueDay)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalDescriptionOpen, setModalDescriptionOpen] = useState(false)
    const descriptionExample = [
        { value: "#8B008B", label: "UI" },
        { value: "#8B0000", label: "API" },
        { value: "#FF8C00", label: "HOST" },
    ]


    const toggleModalState = () => {
        setModalOpen(!modalOpen)
    }
    const toggleModaDescriptionState = () => {
        setModalDescriptionOpen(!modalDescriptionOpen)
    }
    return (
        <>
            <div className='todo-item'>
                <a href='#' onClick = {toggleModaDescriptionState}><h3>{title}</h3></a>
                <div className='description-block'>
                    {descriptionExample.map((item, index) => (
                        // <div className='description-item' key={index}>{description[key]}</div>
                        <Tag color={item.value}>{item.label}</Tag>
                    )
                    )}
                </div>
                <button onClick={toggleModalState} className='delete-button none-style-button close-button'><i class="fas fa-times-circle fa-sm"></i></button>
            </div>
            <Modal modalOpen={modalOpen} toggleModalState={toggleModalState} />
            <ModalDescription title = {title} modalDescriptionOpen={modalDescriptionOpen} toggleModaDescriptionState={toggleModaDescriptionState} />
        </>
    )
};

export default TodoItem;

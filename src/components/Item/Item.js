import React from 'react';
import './Item.css'

const Item = (props) => {
    const {image, name, time} = props.item;
    const {handleAddToItem} = props;
    return (
        <div className='item-container'>
            <img src={image} alt=''></img>
            <div className='item-info'>
                <h3>{name}</h3>
                <p>Time required: {time}s</p>
            </div>
            <button onClick={() => handleAddToItem(props.item)} className='btn-list'>
                <p className='btn-name'>Add To List</p>
            </button>
        </div>
    );
};

export default Item;
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'
import Cart from '../Cart/Cart';

const Items = () => {
    const [items, setItems] = useState([]);
    const [timecount, setTimecount] = useState([]);

    useEffect(() => {
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);

    const handleAddToItem = (count) => {
        console.log(count);
        const newTimecount = [...timecount , count];
        setTimecount(newTimecount);
    }

    return (
        <div className='items-container'>
            <div className='items-body'>
                <h2 className='exercise'>Select exercise Items:</h2>
                <div className='item'>
                {
                    items.map(item => <Item 
                        item ={item}
                        key = {item.id}
                        handleAddToItem = {handleAddToItem}
                        ></Item>)
                }
                </div>
            </div>
            <div className='profile-body'>
                <Cart cart = {timecount}></Cart>
            </div>
        </div>
    );
};

export default Items;
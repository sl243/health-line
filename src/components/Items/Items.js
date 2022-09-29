import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import logo from '../../images/logo.jpeg';
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

    const handleAddToItem = (item) => {
        console.log(item);
        const newTimecount = [...timecount , item];
        setTimecount(newTimecount);
    }

    return (
        <div className='items-container'>
            <div className='items-body'>
                <h2 className='exercise'>Select exercise Items: {items.length}</h2>
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
                <Cart></Cart>
                {/* <h2>Profile: {timecount.length}</h2>
                <div className='logo'>
                    <img src={logo} alt=''></img>
                    <div className='profile-info'>
                        <h4>Md. Shamim Hossain</h4>
                        <p>Paltan, Dhaka-1000</p>
                    </div>
                </div>
                <div className='details'>
                    <p>75kg Weight</p>
                    <p>5.5 height</p>
                    <p>28yrs Age</p>
                </div>
                <div>
                    <h4>Add A Break</h4>
                    <div className='details'>
                        <button>10s</button>
                    </div>
                </div>
                <div>
                    <h4>Exercise</h4>
                    <div className='details'>
                        <h5>Exercise time <span>seconds</span></h5>
                    </div>
                    <br></br>
                    <div className='details'>
                        <h5>Break time <span>seconds</span></h5>
                    </div>
                </div>
                <button className='activity-btn'>
                    <p>Activity Completed</p>
                </button> */}
            </div>
        </div>
    );
};

export default Items;
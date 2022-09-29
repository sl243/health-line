import React, { useState } from 'react';
import logo from '../../images/logo.jpeg';
import './Cart.css'

const Cart = ({cart}) => {

    const [second, setSecond] = useState('');

    const handleAddToSecond = (e) => {
        setSecond(e.target.innerText);
    }

    let totalTime = 0;

    for(const time of cart){
        totalTime = totalTime + time.time;
    }
    
    return (
        <div>
            <h1>Cart Profile: {cart.length}</h1>
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
                        <div>
                            <button onClick={(e) => handleAddToSecond(e)} className='add-break'>
                               <p>10s</p>
                            </button>
                            <button onClick={(e) => handleAddToSecond(e)} className='add-break'>
                                <p>20s</p>
                            </button>
                            <button onClick={(e) => handleAddToSecond(e)} className='add-break'>
                                <p>30s</p>
                            </button>
                            <button onClick={(e) => handleAddToSecond(e)} className='add-break'>
                                <p>40s</p>
                            </button>
                            <button onClick={(e) => handleAddToSecond(e)} className='add-break'>
                                <p>50s</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Exercise</h4>
                    <div className='details'>
                        <h5>Exercise time {totalTime}<span> seconds</span></h5>
                    </div>
                    <br></br>
                    <div className='details'>
                        <h5>Break time {second}<span> seconds</span></h5>
                    </div>
                </div>
                <button className='activity-btn'>
                    <p>Activity Completed</p>
                </button>
        </div>
    );
};

export default Cart;
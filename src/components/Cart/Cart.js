import React from 'react';
import logo from '../../images/logo.jpeg';
import './Cart.css'

const Cart = ({cart}) => {

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
                        <button>10s</button>
                    </div>
                </div>
                <div>
                    <h4>Exercise</h4>
                    <div className='details'>
                        <h5>Exercise time {totalTime}<span> seconds</span></h5>
                    </div>
                    <br></br>
                    <div className='details'>
                        <h5>Break time <span>seconds</span></h5>
                    </div>
                </div>
                <button className='activity-btn'>
                    <p>Activity Completed</p>
                </button>
        </div>
    );
};

export default Cart;
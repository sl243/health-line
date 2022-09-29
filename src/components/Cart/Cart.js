import React, { useState } from 'react';
import logo from '../../images/logo.jpg';
import './Cart.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => 
    toast.success('Wow Assignment 8 Completed', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

const Cart = ({cart}) => {

    const [second, setSecond] = useState('');

    const handleAddToSecond = (e) => {
        setSecond(e.target.innerText);

        localStorage.setItem('localStorage', second)
    }

    let totalTime = 0;

    for(const time of cart){
        totalTime = totalTime + time.time;
    }
    
    return (
        <div>
                <div className='logo'>
                    <img src={logo} alt=''></img>
                    <div className='profile-info'>
                        <h4>MD SHAMIM HOSSAIN</h4>
                        <p>slmiucse@gmail.com</p>
                        <p>Paltan, Dhaka-1000</p>
                    </div>
                </div>
                <div className='details'>
                    <p className='profile-details'>65kg Weight</p>
                    <p className='profile-details'>5.5 height</p>
                    <p className='profile-details'>28yrs Age</p>
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
                        <h5 className='exercise-time'>Exercise time <span className='totalsec'>{totalTime} seconds</span></h5>
                    </div>
                    <br></br>
                    <div className='details'>
                        <h5 className='exercise-time'>Break time <span className='totalsec'>{second} seconds</span></h5>
                    </div>
                </div>
                <button onClick={notify} className='activity-btn'>
                    <p>Activity Completed</p>
                </button>
                <ToastContainer />
        </div>
    );
};

export default Cart;
import React, { useEffect, useState } from 'react';
import Writter from '../writter/Writter';
import './Writters.css'

const Writters = () => {
    const[writters,setwritters]= useState([]);

    useEffect(()=>{
        fetch('./writterdb.json')
        .then(res=>res.json())
        .then(data=>setwritters(data));

    },[]);


    return (
        <div>

            <p>manajd</p>
            <div className="writters">
            {writters.map(writter=><Writter key={writter._id} writter={writter}></Writter>)}

            </div>
           



            
        </div>
    );
};

export default Writters;
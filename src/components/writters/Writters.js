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

            <p>Writter Club</p>

            <div className="writter-container" >

            <div className="writters">
            {writters.map(writter=><Writter key={writter.id} writter={writter}></Writter>)}
            </div>

           <div className="cart" >
               <h3>Added</h3>


           </div>

           </div>



            
        </div>
    );
};

export default Writters;
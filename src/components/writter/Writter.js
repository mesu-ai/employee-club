import React from 'react';
import './Writter.css';

const Writter = (props) => {
    console.log(props);

    const {name,age,gender,phone,email,honorarium,picture}=props.writter;


    return (
        <div className="writter">
            <img src={picture} alt="" />

            <h3>Name: {name}</h3>
            <p>{gender}</p>
            <p>Age:{age}</p>
            <p>Monthly Honorarium: {honorarium}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p></p>

        
            
        </div>
    );
};

export default Writter;
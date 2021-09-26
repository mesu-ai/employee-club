import React from 'react';
import './Writter.css';

const Writter = (props) => {
    console.log(props);

    const {name,gender,phone,email,honorarium,image}=props.writter;


    return (
        <div className="writter">
            <img src={image} alt="" height="140" width="200" />
            <h3>Name: {name}</h3>
            <p>{gender}</p>
            <p>Monthly Honorarium: {honorarium}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p></p>

        
            
        </div>
    );
};

export default Writter;
import React from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Employee = (props) => {
    console.log(props);

    const {name,gender,phone,email,honorarium,image}=props.employee;
    const element = <FontAwesomeIcon icon={faShoppingCart} />



    return (
        <div className="employee">
            <div className="card">

            <img src={image} alt="" height="140" width="200" />
            <h3>{name}</h3>
            <p>{gender}</p>
            <p>Monthly Honorarium: {honorarium}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <button className="add-hire">{element} Add to Hire</button>

            </div>
            
    
        </div>
    );
};

export default Employee;
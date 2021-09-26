import React from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Employee = (props) => {
  //  console.log(props);

    const {name,gender,phone,email,salary,image}=props.employee;
    const element = <FontAwesomeIcon icon={faUserPlus} />



    return (
        <div className="employee">
            <div className="card">

            <img src={image} alt="" height="140" width="200" />
            <h3>{name}</h3>
            <p>{gender}</p>
            <p>Monthly salary: ${salary}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={()=>props.employeeHireHandaler(props.employee)} className="add-hire">{element} Add to Hire</button>

            </div>
            
    
        </div>
    );
};

export default Employee;
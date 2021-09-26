import React from 'react';
import './AddEmployee.css';

const AddEmployee = (props) => {


    return (
        <div className="employeeName">
            {/* hired employee photo */}
            <img src={props.ename.image} alt="" height="30" width="50" />
            {/* list of hired employee name */}
            <h3> <span > {props.ename.name} </span></h3>
 
        </div>
    );
};

export default AddEmployee;
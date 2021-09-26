import React from 'react';
import './AddEmployee.css';

const AddEmployee = (props) => {
    const {name,image}=props.ename;


    return (
        <div className="employeeName">
            {/* hired employee photo */}
            <img src={image} alt="" height="30" width="50" />
            {/* list of hired employee name */}
            <h3> {name} </h3>
 
        </div>
    );
};

export default AddEmployee;
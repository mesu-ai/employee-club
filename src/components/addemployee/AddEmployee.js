import React from 'react';
import './AddEmployee.css';

const AddEmployee = (props) => {



    console.log(props.ename.name);
    return (
        <div>
        
            <h4> <span className="employeeName"> {props.ename.name} </span></h4>

            
        </div>
    );
};

export default AddEmployee;
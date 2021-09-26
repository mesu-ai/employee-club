import React from 'react';
import './AddEmployee.css';

const AddEmployee = (props) => {

    // console.log(props.ename.name);
    return (
        <div>

            {/* list of hired employee name */}
            <h4> <span className="employeeName"> {props.ename.name} </span></h4>
 
        </div>
    );
};

export default AddEmployee;
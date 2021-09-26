import './Employee-Cart.css';
import React from 'react';
import AddEmployee from '../addemployee/AddEmployee';

const EmployeeCart = (props) => {
  
    let { hire } = props;

    // salary calculation of hired employee
    const reducer=(previous , hire)=> previous + parseFloat(hire.salary);
    const total=hire.reduce(reducer, 0).toFixed(2);

    return (
        
        // employee cart display
        <div className="employeecart">
            <h2 ><span className="cart-heading-text">Employee Cart</span></h2>

            <h3>Employee Recruitment: {props.hire.length} </h3>
            <h3>Total Salary: {total}</h3>
           
            
            {/* list of hired employee */}
            <ul>
                <h3><span style={{color:'red',fontSize:'20px'}}>Hired Employee:</span></h3>


                {hire.map(ename=> <AddEmployee key={Math.random()} ename={ename}></AddEmployee>)}

            </ul>
            


        </div>
    );
};

export default EmployeeCart;
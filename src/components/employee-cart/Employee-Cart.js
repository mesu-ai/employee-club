import './Employee-Cart.css';
import React from 'react';
import AddEmployee from '../addemployee/AddEmployee';

const EmployeeCart = (props) => {
  
    let { hire } = props;

    // console.log(props.hire);

    // hire.map(ename=>console.log(ename));
    // console.log(employeeName);


   
    // let total=0;
   // let fname;
    // for (const employee of hire) {
    //     // console.log(employee.salary);
    //     // total=total+ parseFloat(employee.salary) ;
    //     // console.log(total,employee.salary);
    //     fname=employee.name;
        
    // }

    const reducer=(previous , hire)=> previous + parseFloat(hire.salary);
    const total=hire.reduce(reducer, 0).toFixed(2);

    return (
        
        <div className="employeecart">
            <h2 ><span className="cart-heading-text">Employee Cart</span></h2>
            <h3>Employee Recruitment: {props.hire.length} </h3>
            <h3>Total Salary: {total}</h3>
           
            
            <ul>
            <h3><span style={{color:'red',fontSize:'20px'}}>Hired Employee:</span></h3>


            {hire.map(ename=> <AddEmployee key={Math.random()} ename={ename}></AddEmployee>)}

            </ul>
            


        </div>
    );
};

export default EmployeeCart;
import React, { useEffect, useState } from 'react';
import Employee from '../employee/Employee';
import './Employees.css'

const Employees = () => {
    const[employees,setEmployees]= useState([]);

    useEffect(()=>{
        fetch('./employeedb.json')
        .then(res=>res.json())
        .then(data=>setEmployees(data));

    },[]);

    const employeeHireHandaler =(props)=>{
        console.log(props);


    }


    return (
        

            <div className="employee-container" >

            <div className="employees">
            {employees.map(employee=><Employee key={employee._id} employee={employee} employeeHireHandaler={employeeHireHandaler} ></Employee>)}
            </div>

           <div className="cart" >
               <h1>Employee Cart</h1>
               <h3>Employee Recruitment: </h3>
               <h3>Total Salary To Be Paid:</h3>


           </div>

           </div>

    );
};

export default Employees;
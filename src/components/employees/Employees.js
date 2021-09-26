import React, { useEffect, useState } from 'react';
import EmployeeCart from '../employee-cart/Employee-Cart';
import Employee from '../employee/Employee';
import './Employees.css'

const Employees = () => {
    const[employees,setEmployees]= useState([]);
    const[hire,setHire]= useState([]);

    useEffect(()=>{
        fetch('./employeedb.json')
        .then(res=>res.json())
        .then(data=>setEmployees(data));

    },[]);

    const employeeHireHandaler =(props)=>{

        //console.log(props);
        const newHire=[...hire,props];
        setHire(newHire);
        console.log(newHire);


    }


    return (
        

            <div className="employee-container" >

            <div className="employees">
            {employees.map(employee=><Employee key={employee._id} employee={employee} employeeHireHandaler={employeeHireHandaler} ></Employee>)}
            </div>

           <div className="employee-cart" >
           
               <EmployeeCart hire={hire}></EmployeeCart>

           </div>

           </div>

    );
};

export default Employees;
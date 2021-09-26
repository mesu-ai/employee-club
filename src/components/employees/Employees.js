import React, { useEffect, useState } from 'react';
import EmployeeCart from '../employee-cart/Employee-Cart';
import Employee from '../employee/Employee';
import './Employees.css'


const Employees = () => {
    const[employees,setEmployees]= useState([]);
    const[hire,setHire]= useState([]);

    // employee data load from public folder
    useEffect(()=>{
        fetch('./employeedb.json')
        .then(res=>res.json())
        .then(data=>setEmployees(data));

    },[]);

    // declear new array & add new hired data
    const employeeHireHandaler =(props)=>{

        const newHire=[...hire,props];
        setHire(newHire);

    }


    return (
        
        // parrent component of page
            <div className="employee-container" >

            {/* employee display section */}
            <div className="employees">
                
                {employees.map(employee=><Employee key={employee._id} employee={employee} employeeHireHandaler={employeeHireHandaler} ></Employee>)}
            </div>

            {/* cart section  */}
            <div className="employee-cart" >

                {/* call and pass props for cart calculation */}
               <EmployeeCart hire={hire}></EmployeeCart>

           </div>

           </div>

    );
};

export default Employees;
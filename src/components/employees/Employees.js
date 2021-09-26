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


    return (
        <div>

            

            <div className="employee-container" >

            <div className="employees">
            {employees.map(employee=><Employee key={employee.id} employee={employee}></Employee>)}
            </div>

           <div className="cart" >
               <h3>Added</h3>


           </div>

           </div>



            
        </div>
    );
};

export default Employees;
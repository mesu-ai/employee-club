import React from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';


const Employee = (props) => {
  
    // object destructuring
    const {name,gender,phone,email,salary,image}=props.employee;

    //font awesome icone
    const element = <FontAwesomeIcon icon={faUserPlus} />
    


    return (
       
        // display employee details to card
        <div className="employee">
            <div className="card">

            <img src={image} alt="" height="140" width="200" />
            <h3>{name}</h3>
            <p>{gender}</p>
            <p>Monthly salary: ${salary}</p>
            <p>{email}</p>
            <p>{phone}</p>

            <div style={{display:'flex',justifyContent:'center'}}>
                <p style={{color:'blue',marginRight:'5px'}}><i className="fab fa-facebook fa-2x"></i></p> 
                <p style={{color:'navy',marginLeft:'5px'}}><i className="fab fa-linkedin  fa-2x"></i></p>

            </div>

            

            <button onClick={()=>props.employeeHireHandaler(props.employee)} className="add-hire">{element} Hire Me</button>

            </div>
            
    
        </div>
    );
};

export default Employee;
import React from 'react';

const EmployeeCart = (props) => {
  
    let { hire } = props;
   
    // let total=0;
    // for (const employee of hire) {
    //     console.log(employee.honorarium);
      //   total=total+ parseFloat(employee.honorarium) ;
    //     console.log(total,employee.honorarium);
        
    // }

    const reducer=(previous , hire)=> previous + parseFloat(hire.honorarium);
    const total=hire.reduce(reducer, 0).toFixed(2);
    console.log(total);

    return (
        
        <div>
            <h1>Employee Cart</h1>
            <h3>Employee Recruitment:{props.hire.length} </h3>
            <h3>Total Salary To Be Paid: {total}</h3>

        </div>
    );
};

export default EmployeeCart;
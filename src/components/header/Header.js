import './Header.css';
import React from 'react';

const Header = () => {

    return (
        <div className="header">

            {/* main page header banner */}
            <div className="bannerText">
                <h1>The world's largest staff recruitment expo 2021. Join now to get hired.</h1>
                <h3>Maximum budget of Employee Hiring $1,00,000. </h3>

            {/* register button */}
            <a href="#registerNow" className="banner-link" > <span>Register </span> Now {'>>'} </a> 
            
            </div>
            
            
            {/* website name */}
            <h1 style={{marginTop:'50px'}}><span className="headerText">Employee</span> Club</h1>
            <hr /><hr />
  
        </div>
    );
};

export default Header;
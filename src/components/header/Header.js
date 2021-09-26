import './Header.css';
import React from 'react';

const Header = () => {

    const textDecoration={
        fontStyle:'italic',
        backgroundColor:'whitesmoke',
        display:'inline',
        padding:'8px 20px',
        borderRadius:'10px',
        color:'navy'
    };

    return (
        <div className="header">

            <div className="bannerText">
                <h1>The world's largest staff recruitment expo 2021. Join now to get hired.</h1>

            <a href="/registerNow" className="banner-link" > <span>Register </span> Now {'>>'} </a> 
            
            </div>
            
            
            <h1 style={{marginTop:'50px'}}><span className="headerText">Employee</span> Club</h1>
            <hr /><hr />
  
        </div>
    );
};

export default Header;
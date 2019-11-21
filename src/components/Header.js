import React from 'react'
import logo from '../assets/926 FSS Patch.png'


function Header() {

    return (
        <header>
            <div className="heading">
                <div className="logo-holder">
                    <img className='logo' src={logo} alt="logo"/>
                </div>
                <div className="title-holder">
                    <h3 className="title">926 FSS Sandstormer Booster Club</h3>
                </div>
                <div className="icon_holder" >
                    <i className="fas fa-align-justify fa-2x"></i>
                </div>
            </div>
        </header>
    )

}

export default Header






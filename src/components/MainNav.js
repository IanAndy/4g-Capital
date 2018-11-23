import React from 'react'


const MainNav = ({logoImg}) =>(
    <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
            <a href="#" className="navbar-brand">
                <img src={logoImg} alt="4G Capital" />
            </a>
        </div>
        <div className="side-menu-container">
            <ul className="nav navbar-nav">
                <li className="active"><a href="#"><i className="fa fa-users"></i>Customer</a></li>
                <li><a href="#"><i className="fa fa-user"></i>Loans</a></li>
            </ul>
        </div>
    </nav>
)

export default MainNav
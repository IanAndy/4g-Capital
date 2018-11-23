import React from 'react'
import profilePic  from '../assets/images/person.png'


const HeaderMain = () => (
    <nav className="mnb navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                    <div className="inline">
                        <a href="#" id="col-msbo"><i className="ic fa fa-bars"></i></a>
                    </div>
                    <div className="inline">
                        <ul className="nav navbar-nav inline">
                            <li className="active"><a href="#">KENYA</a></li>
                            <li><a href="#">UGANDA</a></li>
                        </ul>
                    </div>          
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <div className="span-holder">
                            <span>Welcome Barnet</span>
                            <span className="logout">Logout</span>
                        </div>
                    </li>
                    <li><a href="#" className="Img-holder"><img src={profilePic} alt="4G Capital" /></a></li>
                </ul>
            </div>
        </div>
    </nav>
)

export default HeaderMain
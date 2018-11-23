import React from 'react'

import MainNav from './MainNav'


const MainSidebar = (props) =>(
    <div className="col-msb" id="col-msb">
        <MainNav logoImg={props.logo} />
    </div>
)

export default MainSidebar
import React from "react";
import Navbar from "./Navbar";

function Header(){
    return(
        <div id="main">
            <Navbar />
            <div className='name'>
                <h1><span>Whatsapp 2.0</span>Android And Iphone</h1>
                <p className='details'>Only beta Version</p>
           <a href='#' className='cv-btn'>DOWNLOAD</a>
            </div>

        </div>
    )
}

export default Header;
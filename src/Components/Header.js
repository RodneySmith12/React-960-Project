import React from "react"

function Header() {
    return (
        <>
        <div className="top-bar">
            <div className="container_12">
                <div className="grid_6">
                    <a href="www.demolink.org" title="Go to home" alt="#">www.demolink.com</a>
                </div>
                <div className="grid_6">
                    <ul>
                        <li><a href="Support">Support</a></li>
                        <li><a href="FAQS">FAQS</a></li>
                        <li><a href="SightMap">SightMap</a></li>
                        <li><a href="Contacts">Contacts</a></li>   
                        <li><a href="#Help">Help</a><br /></li>
                    </ul>
                </div>
            </div>            
        </div>

        <div className="branding container_12">
            <div className="grid_6">
                <img src="images/detroix.jpg" alt="" />    
            </div>
            <div className="grid_6">
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="FAQS">FAQS</a></li>
                <li><a href="Contacts">Contacts</a></li>   
                <li><a href="#Help">Help</a><br /></li>
                </ul>
            </div>      
        </div>
        </>
    )
}

export default Header
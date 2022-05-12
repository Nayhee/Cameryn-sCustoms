import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <>
                <div className="logoAndNavItems">
                    <img className="navLogo"src="images/logo14.png"/>
                        
                    <ul className="navDiv">
                                            
                        <li classname="navItem">
                            <Link className="navLink" to="/">Gallery</Link>
                        </li>

                        <li classname="navItem">
                            <Link className="navLink" to="/Order">Order</Link>
                        </li>

                        <li classname="navItem">
                            <Link className="navLink" to="/About">About</Link>
                        </li>

                    </ul>

                </div>

                <div className="header">
                    <img className="headerUnderNav" src="images/flower2.png"/>
                </div>
        </>
        
        
    )
}
import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web development & Cloud Computing</h1>
                <Typed
                    className="typed-text"
                    strings={["Web design","Web Development"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
            
        </div>
    )
}

export default Header

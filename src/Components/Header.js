import React from "react";
import {Link} from "react-scroll"

const Header = () => {
  return (
    <div className="header">
        <div className="header_left">
            <h1>Develop<span>er</span>
            </h1>
        </div>
        <div className="header_right">
            <Link to ="About" smooth={true} duration={500}>
                <h4>
                    About Me
                </h4>
            </Link>
            <Link to ="Skills" smooth={true} duration={500}>
                <h4>
                    Skills
                </h4>
            </Link>
            <Link to ="Projects" smooth={true} duration={500}>
                <h4>
                    Projects
                </h4>
            </Link>
            <Link to ="exp" smooth={true} duration={500}>
                <h4>
                    Expertience
                </h4>
            </Link>
            <Link to ="Contact" smooth={true} duration={500}>
                <h4>
                    Contact
                </h4>
            </Link>
            <h4>Join with me</h4>
         
         
         
         
         
        </div>
    </div>
  );
};

export default Header;

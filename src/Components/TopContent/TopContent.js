import  React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css";

const TopContent =() => {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
            <h1>Ms.Durga Esakki</h1>
            <p>A Professional web and App Developer</p>
            <a href="www.google.com">
                <button>Downlode CV</button>
            </a>
            <Link to ="Project" smooth={true} duration={500}>
            <button>My Work</button>
            </Link>
        </div>
      
    </div>
  );
};

export default TopContent;

import { IconButton } from '@material-ui/core';
import {Facebook,Instagram, LinkedIn } from '@material-ui/icons';
import { Element } from 'react-scroll';
import './Contact.css'

const Contact = () => {
  return (
   <Element className="Contact" id="Contact">
    <h1>Contact</h1>
    <div className='Contact_Container'>
        <p>
            Email : <span>durga@gmail.com</span>
        </p>
        <p>
            Githup Username : <span>@durgalakshmi</span>
        </p>
        <div className='Contact_icons'>
            <a href='google.com'>
                <IconButton>
                <LinkedIn />    
                </IconButton>
            </a>
            <a href='google.com'>
                <IconButton>
                <Facebook/>    
                </IconButton>
            </a>
            <a href='google.com'>
                <IconButton>
                <Instagram />    
                </IconButton>
            </a>
        </div>
    </div>

   </Element>
  )
}

export default Contact;

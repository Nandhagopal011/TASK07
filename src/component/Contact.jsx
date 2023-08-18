import React from 'react';

function Contact(){
    return(
        <div id='contact'>
            <h3>send a mail</h3>
            <div className='contact-input'>
               <input type='email' placeholder='your gmail'/>
                <a href='#'>Contact</a>
            </div>
        </div>
    )
}

export default Contact;
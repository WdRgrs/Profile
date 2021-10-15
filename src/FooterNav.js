import React from 'react'
import {GrLinkedin} from "react-icons/gr";
import {AiOutlineInstagram, AiOutlineGithub} from "react-icons/ai";
import './Nav.css'


function FooterNav() {
    return (
        <div id='footer'>
                <a href='https://www.linkedin.com/in/wdrgrs/' target='_blank' rel='noreferrer'>
                    <GrLinkedin 
                        color='#0e76a8'
                    />
                </a>

                <a href='https://github.com/wdrgrs' target='_blank' rel='noreferrer'>
                    <AiOutlineGithub 
                        color="purple"
                    />
                </a>   

                <a href='https://www.instagram.com/wdrgrs/' target='_blank' rel='noreferrer'>
                    <AiOutlineInstagram 
                        color='#3f729b'
                    />
                </a>    

        </div>
    )
}

export default FooterNav


//  <Link to="/">
// <button>
//     Return
// </button>
// </Link>
// <div>contact info</div>
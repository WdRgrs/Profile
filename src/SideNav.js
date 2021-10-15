import React from 'react'
import { Link } from 'react-router-dom'
import {GrMail} from "react-icons/gr";
import { IoHome} from "react-icons/io5";
import './Nav.css'

function SideNav({navLetter, setNavLetter}) {

    const handleClick = () => {
        navLetter === 'W' ? setNavLetter('P') : setNavLetter('W')
    }

    const redirect = () => {
        return navLetter === 'W' ? 'welding' : 'programming'
    }

    return (

        <div className="side-nav">
            {/* <IconContext.Provider value={{size: '2.5em'}}>         */}
                <Link to='/profile'>
                    <IoHome 
                        color='#66FCF1'
                    />
                </Link>

                <Link to={redirect}><div onClick={handleClick}>{navLetter}</div></Link>

                <a href="mailto:wdrgrs@gmail.com" target="_blank" rel="noreferrer">
                    <GrMail 
                        color='lightblue'
                    />
                </a>
            {/* </IconContext.Provider> */}
        </div>
    )
}

export default SideNav

import React from 'react'
import FooterNav from './FooterNav'
import SideNav from './SideNav'
// import { Link } from 'react-router-dom'
import './Welding.css'

function Welding({navLetter, setNavLetter}) {
    return (
        <div className='welding-body'>
            <div id="temp">
                Hello! This is my Welding Page.. It is currently under construction, check back soon!
            </div>

            <FooterNav />
            <SideNav 
                navLetter={navLetter}
                setNavLetter={setNavLetter}
            />            
        </div>
    )
}

export default Welding

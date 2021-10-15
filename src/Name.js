import React from 'react'
import { Link } from 'react-router-dom'
import './Name.css'

function Name({setNavLetter}) {

    return (
        <div className="landed">
            <div className='landed-container'>
                <div className='name-container'>
                    <p className="name" id="first-name"><span>W</span>ade</p>
                    <p className="name" id="last-name"><span>R</span>ogers</p>
                </div>

                <div className='job-container'>
                    <p id="job-programming" onClick={()=>setNavLetter('W')}><Link to='/programming'>Full-stack Web Dev</Link></p>
                    <p id="job-divider">|</p>
                    <p id="job-welding" onClick={()=>setNavLetter('P')}><Link to='/welding'>Industrial Welder</Link></p>
                </div>
            </div>                   
        </div>                
    )
}

export default Name

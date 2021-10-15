import React, { useState } from 'react'
import FooterNav from './FooterNav'
import SideNav from './SideNav'
import ProgSkills from './ProgSkills'
import ProgProj from './ProgProj'
import './Programming.css'
import About from './About'

function Web({navLetter, setNavLetter}) {
    const [showSkills, setShowSkills] = useState(false);
    const [showProg, setShowProg] = useState(false);


    return (
        <div className='web'>
            <div className="web-container">
                <h1 id="web-title">Full-Stack Web Development</h1>
                <div className="btn-group">
                    <button 
                        className='btn'
                        onClick={()=>setShowProg(true)}
                    >
                        Projects
                    </button>
                    <button 
                        className='btn'
                        onClick={()=>setShowSkills(true)}
                    >
                        Skills
                    </button>
                </div>

            <About />    

            </div>
            <ProgProj 
                showProg={showProg}
                setShowProg={setShowProg}
            />
            <ProgSkills 
                showSkills={showSkills}
                setShowSkills={setShowSkills}  
            />

            <FooterNav />
            <SideNav 
                navLetter={navLetter}
                setNavLetter={setNavLetter}
            />
        </div>
    )
}

export default Web

import React from 'react'
import './modal.css'
import './ProgSkills.css'
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiPython, SiMongodb, SiGit, SiGithub, SiFigma, SiHeroku } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function ProgSkills({showSkills, setShowSkills}) {

    if (!showSkills) {
        return null
    }

    return (
        <div className="modal-right">
            <div className="modal-content">
                <div className="modal-header">
                    <div id="close">
                        <AiOutlineCloseCircle 
                            color="white"
                            size="2.5em"
                            onClick={()=>setShowSkills(false)}
                            style={{cursor:'pointer'}}
                        />
                    </div>

                    <div className="modal-title">
                        Skills & Technologies
                    </div>
                </div>

                <div className="modal-body">
                    <div className='skills-container'>
                        <div className='clock-hands'>
                            <div id='skills-hand-container'>
                                <h1 id='skills-hand'>Skills</h1>            
                            </div>

                            <div id='technologies-hand-container'>
                                <h1 id='technologies-hand'>Technologies</h1>
                            </div>

                            <div id='ampersand'>&</div>
                        </div>

                        <IconContext.Provider value={{size: '3em'}}>
                            <div className="skill-item" id="pos1">
                                <a href='https://www.javascript.com/' target='_blank' rel='noreferrer'>
                                    <SiJavascript                         
                                        color='#EFD81D'
                                    /> <p>Javascript</p>
                                </a>
                            </div>
                                
                            <div className="skill-item" id="pos2">
                                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' rel='noreferrer'>
                                    <SiHtml5 
                                        color='#E86229'
                                    /><p>HTLM5</p>
                                </a>
                            </div>
                                
                            <div className="skill-item" id="pos3">
                                <a href='https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/' target='_blank' rel='noreferrer'>
                                    <SiCss3 
                                        color='#156EB1'
                                    /><p>CSS3</p>
                                </a>
                            </div>
                                
                            <div className="skill-item" id="pos4">
                                <a href='https://www.heroku.com/' target='_blank' rel='noreferrer'>
                                    <SiHeroku 
                                        color='#7953B9'
                                    /><p>Heroku</p>
                                </a>
                            </div>

                            <div  className="skill-item" id="pos5">
                                <a href='https://expressjs.com/' target='_blank' rel='noreferrer'>
                                    <div >
                                        <SiExpress 
                                            color='#000'
                                            size='2.8em'
                                            style={{
                                                padding: '.1em',
                                                background: '#fff',
                                                borderRadius: '50%'
                                            }}
                                        />
                                    </div>
                                    <p>Express</p>
                                </a>
                            </div>
    
                            <div className="skill-item" id="pos6">
                                <a href='https://www.mongodb.com/' target='_blank' rel='noreferrer'>
                                    <SiMongodb 
                                        color='#649A41'
                                    /><p>MongoDB</p>
                                </a>
                            </div>

                            <div className="skill-item" id="pos7">
                                <a href='https://www.python.org/' target='_blank' rel='noreferrer'>
                                    <SiPython 
                                        color='#F2CD41'
                                    /><p>Python</p>
                                </a>
                            </div>
                                    
                            <div className="skill-item" id="pos8">
                                <a href='https://git-scm.com/' target='_blank' rel='noreferrer'>
                                    <SiGit 
                                        color='#E54D30'
                                    /><p>Git</p>
                                </a>
                            </div>
                                    
                            <div className="skill-item" id="pos9">
                                <a href='https://github.com/' target='_blank' rel='noreferrer'>
                                    <SiGithub 
                                        color='#800080'
                                    /><p>GitHub</p>
                                </a>
                            </div>
                                    
                            <div className="skill-item" id="pos10">
                                <a href='https://www.figma.com/' target='_blank' rel='noreferrer'>
                                    <SiFigma 
                                        color='#E64B1D'
                                    /><p>Figma</p>
                                </a>
                            </div>
                                    
                            <div className="skill-item" id="pos11">
                                <a href='https://nodejs.org/en/' target='_blank' rel='noreferrer'>
                                    <SiNodedotjs 
                                        color='#509941'
                                    /><p>Node</p>
                                </a>
                            </div>
                                    
                            <div className="skill-item" id="pos12">
                                <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                                    <FaReact 
                                        color='#01CCF2'
                                    /><p>React</p>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default ProgSkills

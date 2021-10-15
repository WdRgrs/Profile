import React from 'react'
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from "react-icons/ai";
import melodient from './images/homescreen.jpg'
import chatapp from './images/currentproject.jpg'
import { BsYoutube } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import {AiOutlineGithub} from "react-icons/ai";


function ProgProj({showProg, setShowProg}) {
    if (!showProg) {
        return null
    }
    return (
        <div className="modal-left">
                        <IconContext.Provider value={{size: '2.5em'}}>        

            <div className="modal-content">
                <div id="close">
                        <AiOutlineCloseCircle 
                            color="white"
                            size="2.5em"
                            onClick={()=>setShowProg(false)}
                            style={{cursor:'pointer'}}
                        />
                </div>
                <div className="modal-header">
                    <div className="modal-title">
                        Recent Projects
                    </div>         
                </div>

                <div className="modal-body">
                    <div className="project">
                        <div className='project-title'>Melodient</div>

                        <a href="https://melodient.herokuapp.com" target="_blank" className='project-link' rel="noreferrer">
                            <img src={melodient} className="project-image" id="melodient-image" alt="melodient"/>
                        </a>

                        <div className="project-icons">
                            <a href="https://melodient.herokuapp.com" target="_blank" className='project-link' rel="noreferrer">
                                <FiExternalLink 
                                    color='lightblue'
                                />
                            </a>
                            <a href='https://github.com/WdRgrs/CapstoneProject' target='_blank' rel='noreferrer'>
                                <AiOutlineGithub 
                                    color="purple"
                                />
                            </a>  
                        </div>

                        <div className="technologies">Technologies Utilized: MERN Stack</div>
                        <div className="technologies-details">MongoDB(mongoose) | Express | React | Node.js | JavaScript | HTML5 | CSS3 | Spotify API | Spotify Web Playback | Axios | Oauth2 | Dotenv | JSON | Git | Github | Heroku | Figma | Trello</div>
                        
                        <div className='about-modal-title'>About: </div>
                        <div className='about-details'>Created a navigable map of Spotify’s Library and music player with dynamic data visualizations and representations utilizing the MERN stack, as a means to explore new and different genres of music.</div>
                    </div>

                    <div className="project">
                        <a href="https://wwwwwwwwwwwwwwwwwwwww.herokuapp.com/photos#commentInputs" target="_blank" className='project-link' rel="noreferrer">
                            <div className='project-title'>Comment Box | Profile</div>
                        </a>

                        <a href="https://wwwwwwwwwwwwwwwwwwwww.herokuapp.com/photos#commentInputs" target="_blank" className='project-link' rel="noreferrer">
                            <img src={chatapp} className="project-image" id="chatapp-image" alt="chatapp"/>
                        </a>                        



                        <div className="project-icons">
                            <a href="https://www.youtube.com/watch?v=TyiiZmUncbA" target="_blank" rel="noreferrer">
                                <BsYoutube 
                                    color='red'
                                />
                            </a>
                            <a href="https://wwwwwwwwwwwwwwwwwwwww.herokuapp.com/photos#commentInputs" target="_blank" className='project-link' rel="noreferrer">
                                <FiExternalLink 
                                    color='lightblue'
                                />
                            </a>
                            <a href='https://github.com/WdRgrs/Foundations-Project' target='_blank' rel='noreferrer'>
                                <AiOutlineGithub 
                                    color="purple"
                                />
                            </a> 
                        </div>

                        <div className="technologies">Technologies Utilized:</div>
                        <div className="technologies-details">JavaScript | HTML | CSS | Git | Node.js | Axios | Cors | Sequelize | Github | Heroku | Figma | Youtube</div>

                        <div className='about-modal-title'>About: </div>
                        <div className='about-details'>Designed and built a persistent comment section (temprorary internet storage) and user profile with various pages/content.</div>
                    </div>
                </div>

                <div className="modal-footer">
                </div>
            
            </div>   
                        </IconContext.Provider>

        </div>
    )
}

export default ProgProj

import React from 'react'
import './About.css'
import dog from './images/dog.jpeg'
import developer from './images/developer.jpg'


function About() {
    return (
        <div className='about'>
            <div className='card-holder'>
                <div className='card'>
                    <div className='about-image'>
                        <img src={dog} id='about-image' alt='profile' />
                    </div>

                    <div className='about-image-back'>
                        <img src={developer} id='about-image-middle' alt='profile' />
                    </div>
                </div>
            </div>

            <p className='about-text'>

                I'm a full-stack web developer based out of Austin, Texas.  Driven by a serious case of curiosity, <strong><span>I will forever be a student</span></strong>.  I enjoy expanding on subjects that I already feel comfortable with and I'm equally excited about topics that can take me outside of my comfort zone - <strong>growth</strong>.
                <br />
                <br />
                
                As somebody who is very goal oriented I am passionate about <strong>achievement</strong>:  I derive copious amounts of joy from coming up with <strong>solutions</strong> to challenges and challenge myself to continuously improve. 
                <br />
                <br />

                If you are looking for a highly motivated individual to join your team, I'd love to hear from you!  

            </p>
        </div>
    )
}

export default About

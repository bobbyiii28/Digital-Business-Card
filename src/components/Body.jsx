import React from 'react'
import EmailImage from '../assets/Mail.svg'
import LinkedinImage from '../assets/linkedin.svg'

function Body () {
    return (
        <div className = 'body-container'>
                <div class = 'body-intro' >
                    <h1>Laura Smith</h1>
                    <p className = "subtitle">Frontend Developer</p>
                    <p className = "website">laurasmith.website</p>

                </div>

                <div className = 'secondary-container'>

                    <div className = 'links-container'>
                        <a className = 'email-btn' href = '#' ><img src = {EmailImage}></img>Email</a>
                        <a className= 'linkedin-btn' href = '#' ><img src = {LinkedinImage}></img>Linkedin</a>
                    </div>

                    <div className = 'text-container'>
                        <h3>About</h3>
                        <p className = 'about-text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        <h3>Interests</h3>
                        <p className = 'interests-text'>
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic. 
                        </p>
                    </div>
                </div>

        </div>
    )
}

export default Body 
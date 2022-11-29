import React from 'react'
import FacebookIcon from '../assets/Facebook Icon.svg'
import TwitterIcon from '../assets/Twitter Icon.svg'
import InstagramIcon from '../assets/Instagram Icon.svg'
import GithubIcon from '../assets/GitHub Icon.svg'


function Footer () {
    return (
        <footer>
            <div className = 'footer-link-container'>
                    <img className = 'footer-img' src = {TwitterIcon}></img>
                    <img className = 'footer-img' src = {FacebookIcon}></img>
                    <img className = 'footer-img' src = {InstagramIcon}></img>
                    <img className = 'footer-img' src = {GithubIcon}></img>
            </div>
        </footer>
    )
}

export default Footer
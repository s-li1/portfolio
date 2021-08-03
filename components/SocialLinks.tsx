import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialLinks() {
    return (
        <div className="flex gap-8 md:flex-col md: place-content-center">
            <a href="https://github.com/s-li1" target="_blank"><FaGithub size="50"/></a>
            <a href="https://www.linkedin.com/in/stevenlii/" target="_blank"><FaLinkedin size="50"/></a>
            <a href="https://www.instagram.com/steeven_lee/" target="_blank"><FaInstagram size="50"/></a>
        </div>
    )
}

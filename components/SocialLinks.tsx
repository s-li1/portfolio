import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialLinks() {
    return (
        <div className="m-8 p-8 flex space-x-9 md:flex-col md:space-y-8 md:space-x-0">
            <a href="https://github.com/s-li1" target="_blank" rel="noreferrer" className="transform transition duration-300 hover:text-main-blue"><FaGithub size="50"/></a>
            <a href="https://www.linkedin.com/in/stevenlii/" target="_blank" rel="noreferrer" className="transform transition duration-300  hover:text-main-blue"><FaLinkedin size="50"/></a>
            <a href="https://www.instagram.com/steeven_lee/" target="_blank" rel="noreferrer" className="transform transition duration-300 hover:text-main-blue"><FaInstagram size="50"/></a>
        </div>
    )
}

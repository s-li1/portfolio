import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialLinks() {
    return (
        <div className="flex md:flex-col gap-4">
            <a href="https://github.com/s-li1"><FaGithub size="50"/></a>
            <a href="https://www.linkedin.com/in/stevenlii/"><FaLinkedin size="50"/></a>
            <a href="https://www.instagram.com/steeven_lee/"><FaInstagram size="50"/></a>
        </div>
    )
}

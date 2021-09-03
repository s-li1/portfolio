import React from 'react';
import Container from '../components/Container';
import Link from 'next/dist/client/link';
import SocialLinks from '../components/SocialLinks';
import Image from 'next/image';
import Glasses from '../public/animations/glasses.gif'
import Profile from '../public/profile.jpeg';

export default function Home() {
  return (
    <Container>
      <div className="flex items-center justify-center font-custom font-medium mx-auto mb-10 text-main-black md:absolute md:inset-0">
        <div className="flex flex-col justify-evenly w-full p-12 place-items-center md:flex-row">
          <div className="flex flex-col justify-center items-start mb-8">
            <h1 className="text-7xl font-semibold">
              Steven Li. <span className="inline-block align-middle"><Image src={Glasses} alt="Glasses Icon" width="85" height="85"/></span>
            </h1>
            <h2 className="text-4xl text-gray-400 mb-6">
              Welcome to my world!
            </h2>
            <h3 className="text-3xl">
              I am an aspiring Software Engineer
            </h3>
            <h3 className="text-3xl mb-8">based in Sydney, Australia.</h3>
            <Link href="/about">
              <button className="text-main-blue text-2xl font-normal rounded border-2 border-main-blue p-3 transform transition duration-500 hover:scale-110">
                About Me
              </button>
            </Link>
          </div>
          <div>
            <Image src={Profile} alt="Steven Li - Profile" width="325" height="325" objectFit="cover" className="rounded-full m-3"/>
          </div>
          <SocialLinks/>
        </div>
      </div>
    </Container>
  )
}

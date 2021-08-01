import React from 'react'
import Container from '../components/Container'
import Link from 'next/dist/client/link'
import SocialLinks from '../components/SocialLinks'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center mx-auto mb-10 text-main-black">
        <div className="px-5 flex flex-col justify-evenly md:flex-row w-full p-12">
          <div className="flex flex-col justify-center font-custom font-medium items-start mb-8">
            <h1 className="text-7xl font-semibold">
              Steven Li.
            </h1>
            <h2 className="text-4xl text-gray-400 mb-6">
              Welcome to my world!
            </h2>
            <h3 className="text-3xl">
              I am an aspiring Software Engineer
            </h3>
            <h3 className="text-3xl mb-8">based in Sydney, Australia.</h3>
            <Link href="/about">
              <a className="text-main-blue text-2xl font-normal rounded border-2 border-main-blue p-3 transform transition duration-500 hover:scale-110">
                About Me
              </a>
            </Link>
          </div>
          <div>
            <img src="/profile.jpeg" alt="Steven Li - Profile" width="325" height="325" className="rounded-full border-4 border-main-blue m-3"/>
          </div>
          <SocialLinks/>
        </div>
      </div>
    </Container>
  )
}

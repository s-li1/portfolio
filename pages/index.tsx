import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Container from '../components/Container'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center mx-auto mb-10 text-main-black">
        <div className="flex w-3/4 justify-evenly md:w-full">
          <div className="flex flex-col justify-center font-custom font-medium">
            <h1 className="text-7xl font-semibold">
              Steven Li.
            </h1>
            <h2 className="text-4xl text-gray-500 mb-16">
              Welcome to my world!
            </h2>
            <h3 className="text-3xl">
              I am an aspiring Software Engineer
            </h3>
            <h3 className="text-3xl">based in Sydney, Australia.</h3>
          </div>
          <div>
            <img src="/profile.jpeg" alt="Steven Li - Profile" width="350" height="350" className="rounded-full border-4 border-main-blue"/>
          </div>
        </div>
      </div>
    </Container>
  )
}

import React from 'react';
import Container from '../components/Container';
import Image from 'next/image';
import BITCohort from '../public/bit_cohort.jpeg';
import ACSS from '../public/acss.png';
import Code from '../public/animations/code.gif';
import Globe from '../public/animations/globe.gif';

export default function About() {
    return (
        <Container title="About - Steven Li" displayFooter={true}>
            <div className="flex-col text-main-black p-10 md:flex md: items-center">
                <div className="mb-20 md:flex">
                    <div>
                        <h1 className="text-4xl font-semibold mb-8">
                            <span className="inline-block align-middle"><Image src={Code} alt="Code" width="65" height="65"/></span> About me.
                        </h1>
                        <h2 className="text-2xl max-w-prose mb-8">
                            I’m a 2nd year student studying a Bachelor of Information Technology at the University of Technology Sydney.
                        </h2>
                        <h2 className="text-2xl max-w-prose mb-8">
                            I’ve always had a passion for technology and seek to build impactful software with a focus on writing clean code.
                        </h2>
                    </div>
                    <div className="h-full w-full md:max-w-md md:ml-10">
                        <Image src={BITCohort} alt="Bachelor of Information Technology Cohort 2022"/>
                    </div>
                </div>
                <div className="mb-10 md:flex md:flex-row-reverse">
                    <div>
                        <h1 className="text-4xl font-semibold mb-8">
                            <span className="inline-block align-middle"><Image src={Globe} alt="Globe" width="65" height="65"/></span> Language Learner.
                        </h1>
                        <h2 className="text-2xl max-w-prose mb-8">
                            Beyond coding, I love improving my cross-cultural understanding through getting involved in extra-curriculars and learning languages. You can find me either dabbling in Mandarin or Japanese!
                        </h2>
                    </div>
                    <div className="h-full w-full md:max-w-md md:mr-10">
                        <Image src={ACSS} alt="Australia Chinese Students Society"/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

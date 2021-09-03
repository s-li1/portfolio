import Link from 'next/link';
import React from 'react';
import Container from '../../components/Container';
import Image from 'next/image';
import Personal from '../../public/blog/personal/personal.jpg';
import Technical from '../../public/blog/technical/technical.png'
import Document from '../../public/animations/blog.gif';

export default function Blog() {
    return (
        <Container title="Blog - Steven Li" description="Sharing my journey through life and programming">
            <div className="text-center md:flex md:justify-center md:items-center md:absolute md:inset-0">
                <div>
                    <h1 className="text-4xl font-semibold p-10 self-center text-center md:my-10">
                        <span className="inline-block align-middle">
                            <Image src={Document} alt="Code" width="65" height="65"/>
                        </span> 
                        My Blog.
                    </h1>
                    <div className="px-10 space-x-20 md:flex md:justify-center">
                        <Link href="blog/personal" passHref>
                            <a className="max-w-lg cursor-pointer transform transition duration-500 hover:scale-105 mb-8">
                                <div className="w-full">
                                    <Image src={Personal} alt="Personal Writing"/>
                                </div>
                                <div className="py-4">
                                    <h3 className="text-2xl font-semibold mb-2">
                                        Personal
                                    </h3>
                                    <p className="text-lg">Sharing my journey through life.</p>
                                </div>
                            </a>
                        </Link>
                        <Link href="blog/technical" passHref>
                            <a className="max-w-lg cursor-pointer transform transition duration-500 hover:scale-105">
                                <div className="w-full">
                                    <Image src={Technical} alt="Technical Writing"/>
                                </div>
                                <div className="py-4">
                                    <h3 className="text-2xl font-semibold mb-2">Technical</h3>
                                    <p className="text-lg">Sharing my learnings as a developer.</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

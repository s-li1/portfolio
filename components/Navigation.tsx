import React from 'react'
import NextLink from 'next/link';

export default function Navigation() {
    return (
        <>
        <div className="border-b-4 border-main-blue text-3xl">
            <NextLink href="/">
                Steven Li.
            </NextLink>
        </div>
        <div>
            <NextLink href="/">
                <a className="p-2 text-gray-900 sm:p-4 hover:text-main-blue text-xl">Home</a>
            </NextLink>
            <NextLink href="/about">
                <a className="p-1 text-gray-900 sm:p-4 hover:text-main-blue text-xl">About</a>
            </NextLink>
            <NextLink href="/projects">
                <a className="p-1 text-gray-900 sm:p-4 hover:text-main-blue text-xl">Projects</a>
            </NextLink>
            <NextLink href="/blog">
                <a className="p-1 text-gray-900 sm:p-4 hover:text-main-blue text-xl">Blog</a>
            </NextLink>
        </div>
        </>
    )
}

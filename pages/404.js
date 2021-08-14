import Link from 'next/link';
import React from 'react';
import Container from '../components/Container';

export default function Custom404() {
    return (
        <Container>
            <div className="text-center">
                <h1>404</h1>
                <p>I couldn't find the page you were looking for!</p>
                <Link href="/"><a>Return Home.</a></Link>
            </div>
        </Container>
    )
}

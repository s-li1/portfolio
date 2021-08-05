import React from 'react';
import Container from '../components/Container';

export default function Blog() {
    return (
        <Container>
            <div>
                <h1 className="text-4xl font-semibold mb-8 p-8 self-center text-center">My Blog.</h1>
                <div className="p-10 md:flex md:justify-around">
                    <div className="max-w-lg">
                        <img className="w-full" src="/blog/personal/personal.jpg" alt="Personal Writing" />
                        <div className="px-6 py-4">
                            <h3 className="text-2xl font-semibold mb-2">
                                Personal
                            </h3>
                            <p className="text-lg">Sharing my journey through life.</p>
                        </div>
                    </div>
                    <div className="max-w-lg">
                        <img className="w-full" src="/blog/technical/technical.png" alt="Technical Technical" />
                        <div className="px-6 py-4">
                            <h3 className="text-2xl font-semibold mb-2">Technical</h3>
                            <p className="text-lg">Sharing my learnings as a developer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

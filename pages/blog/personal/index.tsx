import React from 'react';
import Container from '../../../components/Container';
import BlogPosts from '../../../components/BlogPosts';

export default function Personal() {
    return (
       <Container>
           <div className="p-10 md:ml-10">
            <h1 className="text-4xl font-semibold mb-5">
                Personal.
            </h1>
            <h2 className="text-2xl">Here you will find a bunch of stories about my learnings and experiences.</h2>
           </div>
           <BlogPosts/>
       </Container>
    )
}

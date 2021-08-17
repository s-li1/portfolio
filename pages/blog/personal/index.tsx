import React from 'react';
import Container from '../../../components/Container';
import BlogPosts from '../../../components/BlogPosts';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../../../lib/mdx';
import { IPosts } from '../../../types/types';

export default function Personal({ posts }: IPosts) {
    return (
       <Container>
           <div className="p-10 md:ml-10">
            <h1 className="text-4xl font-semibold mb-5">
                Personal.
            </h1>
            <h2 className="text-2xl">Here you will find a bunch of stories about my learnings and experiences.</h2>
           </div>
           <BlogPosts posts={posts}/>
       </Container>
    )
}

export const getStaticProps: GetStaticProps = async() => {
    const posts = await getAllPosts('personal');
    return {
        props: {
            posts
        }
    }
}


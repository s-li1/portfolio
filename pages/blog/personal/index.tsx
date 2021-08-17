import React from 'react';
import Container from '../../../components/Container';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../../../lib/mdx';
import { IPosts } from '../../../types/types';
import BlogPostLink from '../../../components/BlogPostLink';

export default function Personal({ posts }: IPosts) {
    return (
       <Container>
           <div className="p-10 md:ml-10">
            <h1 className="text-4xl font-semibold mb-5">
                Personal.
            </h1>
            <h2 className="text-2xl">Here you will find a bunch of stories about my learnings and experiences.</h2>
           </div>
           <div className="p-12 md:mx-10">
            {posts.map((post,index) =>
                <BlogPostLink key={index} {...post}/>
            )}
            </div>
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


import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { getPostBySlug, getAllPosts } from '../../lib/mdx';
import { IPost } from '../../types/types';

export default function Blog(post: IPost) {
    return (
        <div>
            {post.title}
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const posts = await getAllPosts();

    return {
        paths: posts.map((p) => {
            return {
                params: {
                    slug: p.slug
                }
            }
        }),
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async({ params }) => {
    const post = await getPostBySlug(params.slug as string);

    return {
        props: post
    }
}

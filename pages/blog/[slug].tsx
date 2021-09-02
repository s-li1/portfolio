import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { getPostBySlug, getAllPosts } from '../../lib/mdx';
import { IPost } from '../../types/types';
import MDXComponents from '../../components/MDXComponents';
import Container from '../../components/Container';

export default function Blog({ source, data }: IPost) {
    return (
        <Container title={data.title} descripion={data.summary}>
            <article className="flex-col justify-center items-start max-w-5xl w-full mx-auto px-8">
                <h1 className="text-4xl font-semibold mb-8">{data.title}</h1>
                <div className="flex items-center space-x-3 mb-8">
                    <img src="/profile.jpeg" alt="Steven Li" className="rounded-full" width="50" height="50"/>
                    <p>{data.author}</p>
                    <p>{data.date}</p>
                </div>
                <div className="text-xl">
                    <MDXRemote {...source} components={MDXComponents}/>
                </div>
            </article>
        </Container>
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
    const { data, content } = await getPostBySlug(params.slug as string);

    const mdxSource = await serialize(content);

    return {
        props: { source: mdxSource, data }
    }
}

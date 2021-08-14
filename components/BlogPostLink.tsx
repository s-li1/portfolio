import Link from 'next/link';
import React from 'react';
import { IPost } from '../types/types';

export default function BlogPostLink(post: IPost) {
    return (
        <Link href="/">
            <a>
                <div className="border-b-2 border-main-gray mb-8 pb-8 md:flex">
                    <span className="text-lg md:mr-5 text-main-blue">{post.date}</span>
                    <div>
                        <h3 className="text-2xl font-semibold pb-5">{post.title}</h3>
                        <p className="text-lg">{post.summary}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

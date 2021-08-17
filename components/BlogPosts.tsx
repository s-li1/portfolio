import React from 'react'
import { IPosts } from '../types/types'
import BlogPostLink from './BlogPostLink'

export default function BlogPosts({ posts }: IPosts) {
    return (
        <div className="px-12 mt-5 md:mx-10">
            {posts.map((post,index) =>
                <BlogPostLink key={index} {...post}/>
            )}
        </div>
    )
}
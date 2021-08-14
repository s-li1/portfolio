import React from 'react'
import BlogPostLink from './BlogPostLink'

export default function BlogPosts() {
    const posts = [
        {
            title: "What I learned during Placement.",
            date: "18/8/21",
            summary: "There’s so many things that I learnt. Here are some of it that I want to share to everyone viewing."
        },
        {
            title: "My First Internship",
            date: "10/8/21",
            summary: "Here are my thoughts."
        },
        {
            title: "How to build an API",
            date: "6/7/20",
            summary: "I will show you how to build your first RESTful API."
        }
    ]
    return (
        <div className="p-12 md:mx-10">
            {posts.map((post,index) =>
                <BlogPostLink key={index} {...post}/>
            )}
        </div>
    )
}

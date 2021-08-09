import React from 'react'

export default function Posts() {
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
        <div className="md:m-10 p-12">
            {posts.map((post,index) =>
                    <div className="border-b-2 border-main-gray mb-8 pb-8 md:flex" key={index}>
                        <span className="text-xl">{post.date}</span>
                        <div>
                            <h3 className="text-4xl font-semibold pb-5">{post.title}</h3>
                            <p className="text-2xl">{post.summary}</p>
                        </div>
                    </div>
            )}
        </div>
    )
}

import React from 'react'

export default function BlogPostLink({date, title, summary}) {
    return (
        <div className="border-b-2 border-main-gray mb-8 pb-8 md:flex">
            <span className="text-lg md:mr-5 text-main-blue">{date}</span>
            <div>
                <h3 className="text-2xl font-semibold pb-5">{title}</h3>
                <p className="text-lg">{summary}</p>
            </div>
        </div>
    )
}

import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <div className="flex justify-center place-items-center mt-15 p-10">
            <div className="flex-col text-center max-w-prose">
                <h1 className="text-4xl mb-3.5">Get in Touch</h1>
                <p className="text-lg">I love engaging with others so if you have any questions or just want to chat, feel free to reach out below and I'll try get back to you!</p>
                <Link href="mailto:stevenli8892@hotmail.com.au">
                    <button className="text-main-blue text-2xl font-normal rounded border-2 border-main-blue p-3 transform transition duration-500 hover:scale-110 my-5">
                        Say Hi
                    </button>
                </Link>
            </div>
        </div>
    )
}

import Head from 'next/head';
import { useRouter } from 'next/router';
import { PropsWithChildren, ReactNode } from 'react';
import Navigation from './Navigation';

export default function Container(props: PropsWithChildren<ReactNode>) {
    const { children } = props;
    const router = useRouter();
    const meta = {
        title: 'Steven Li',
        description: 'Information Technology Student, Javascript Nerd'
    }
    return (
        <div className="bg-white font-custom text-main-black">
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="flex items-center justify-between w-full p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8">
               <Navigation/>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}
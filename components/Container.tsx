import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export default function Container(props) {
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
            <nav className="flex items-center justify-between w-full max-w-7xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8">
                <div className="link-underline text-3xl">
                    Steven Li.
                </div>
                <div>
                    <NextLink href="/">
                        <a className="p-2 text-gray-900 sm:p-4 hover:text-main-blue text-xl">Home</a>
                    </NextLink>
                    <NextLink href="/about">
                        <a className="p-1 text-gray-900 sm:p-4 hover:text-main-blue text-xl">About</a>
                    </NextLink>
                    <NextLink href="/projects">
                        <a className="p-1 text-gray-900 sm:p-4 hover:text-main-blue text-xl">Projects</a>
                    </NextLink>
                    <NextLink href="/blog">
                        <a className="p-1 text-gray-900 sm:p-4 hover:text-main-blue text-xl">Blog</a>
                    </NextLink>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}
import fs from 'fs'
import { join } from 'path';
import matter from 'gray-matter';
import { IFrontMatter, IPost } from '../types/types';

const blogDirectory = join(process.cwd(), 'data', 'blog');

async function getPostBySlug(slug: string): Promise<IPost> {
    const fullPath = join(blogDirectory, `${slug}.mdx`);
    const source = fs.readFileSync(fullPath);

    const data = getMetaDataOfPost(source);
    const content = getContentOfPost(source);

    return {
        data,
        content,
        slug
    }
}

async function getAllPosts(): Promise<IPost[]> {
    const posts = fs.readdirSync(blogDirectory);

    return posts.reduce((allPosts, slug) => {
        const source = fs.readFileSync(join(blogDirectory, slug));
        const data = getMetaDataOfPost(source);

        return [
            {
                data,
                slug: slug.replace('.mdx', '')
            },
            ...allPosts
        ];
    }, []);
}

function getMetaDataOfPost(source: Buffer): IFrontMatter {
    const { data } = matter(source);
    return data as IFrontMatter;
}

function getContentOfPost(source: Buffer): string {
    const { content } = matter(source);
    return content;
}

export { getAllPosts, getPostBySlug };
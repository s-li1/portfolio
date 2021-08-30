import fs from 'fs'
import { join } from 'path';
import matter from 'gray-matter';
import { IPost } from '../types/types';

const blogDirectory = join(process.cwd(), 'data', 'blog');

async function getPostBySlug(slug: string): Promise<any> {
    const fullPath = join(blogDirectory, `${slug}.mdx`);
    const source = fs.readFileSync(fullPath);

    const { data, content } = matter(source);

    return {
        ...data,
        content,
        slug
    }
}

async function getAllPosts(): Promise<IPost[]> {
    const posts = fs.readdirSync(blogDirectory);

    return posts.reduce((allPosts, slug) => {
        const source = fs.readFileSync(join(blogDirectory, slug));
        const { data } = matter(source);

        return [
            {
                ...data,
                slug: slug.replace('.mdx', '')
            },
            ...allPosts
        ];
    }, []);
}

export { getAllPosts, getPostBySlug };
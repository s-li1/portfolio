import fs, { readFileSync } from 'fs'
import { join } from 'path';
import matter from 'gray-matter';

const dataDirectory = join(process.cwd(), 'data');

async function getPostBySlug(slug: string): Promise<any> {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(dataDirectory, `${realSlug}.mdx`);
}

async function getAllPosts(type: string): Promise<string[]> {
    const blogDirectory = join(dataDirectory, 'blog', type);
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

export { getAllPosts };
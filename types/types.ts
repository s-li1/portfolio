import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface IPost {
    data: IFrontMatter
    slug: string
    content?: string
    source?: MDXRemoteSerializeResult
}

interface IPosts {
    [index: string]: IPost[]
}

interface IFrontMatter {
    title: string,
    date: string,
    summary: string,
    author: string,
    type: string
}

export type { IPost, IPosts, IFrontMatter };
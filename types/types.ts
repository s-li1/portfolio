interface IPost {
    title: string,
    date: string,
    summary: string,
    author: string,
    type: string,
    slug: string
    content?: string,
}

interface IPosts {
    [index: string]: IPost[]
}

export type { IPost, IPosts };
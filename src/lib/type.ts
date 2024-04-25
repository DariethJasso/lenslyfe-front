export type User = {
    id: number,
    name: string,
    lastname: string,
    username: string,
    avatar: string,
    telephone: string,
    biography: string
    email: string
}

export type Post = {
    id: number,
    text: string,
    url_img: string,
    user_id: number
    created_at: string
    likes: number
    comments: number
}
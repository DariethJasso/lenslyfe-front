import { useDataUser } from '@/hook/useDataUser';
import Posts from '../post';

const PostProfile = () => {
    const { posts, users } = useDataUser();

    // Verifica si posts y users están definidos y si users no es null antes de intentar mapearlo
    if (!Array.isArray(posts) || users === null) {
        return <div>Loading...</div>;
    }

    // Ordena los posts por su fecha de creación
    const sortedPosts = posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const userPosts = sortedPosts.filter(post => post.user_id === users.id && post.user_id !== null);

    return (
        <>
            {userPosts.map(post => (
                <Posts key={post.id} post={post} user={users} />
            ))}
        </>
    );
}


export default PostProfile
import React from 'react';
import { useDataUser } from '@/hook/useDataUser';
import Posts from '../post';

const SectionPosts = () => {
    const { posts, userFull } = useDataUser();

    // Verifica si posts y userFull están definidos y si userFull es un array antes de intentar mapearlo
    if (!Array.isArray(posts) || !Array.isArray(userFull)) {
        return <div>Loading...</div>;
    }

    // Ordena los posts por su fecha de creación
    const sortedPosts = posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return (
        <>
            {sortedPosts.map((post) => {
                // Verifica si userFull es un array antes de intentar usar el método find
                if (!Array.isArray(userFull)) {
                    return null;
                }
                // Encuentra el usuario correspondiente a la publicación por su id
                const user = userFull.find(user => user.id === post.user_id);
                // Asegúrate de que el usuario esté definido antes de renderizar la publicación
                if (!user) {
                    return null; // O maneja el caso donde no se encuentra el usuario
                }
                return (
                    <Posts key={post.id} post={post} user={user} />
                );
            })}
        </>
    );
};

export default SectionPosts;

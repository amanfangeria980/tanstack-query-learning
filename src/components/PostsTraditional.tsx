import { useEffect, useState } from "react";
import axios from "axios";
const PostsTraditional = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/posts");
            setPosts(response.data);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <div className="post-list">
                    {posts.map((post) => (
                        <div key={post.id} className="post-item">
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-body">{post.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostsTraditional;

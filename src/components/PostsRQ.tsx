import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

const PostsRQ = () => {
    const { data, isLoading, isError, error, refetch } = useQuery<Post[]>({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:8000/posts");
            return response.data;
        },
        // enabled: false, can be added so that it doesn't fetch data on mount
        enabled: false,
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error : {error.message}</div>;
    console.log(data);
    return (
        <div className="post-list">
            <button onClick={() => refetch()}>Fetch Posts</button>
            {data?.map((post) => (
                <div key={post.id} className="post-item">
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-body">{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsRQ;

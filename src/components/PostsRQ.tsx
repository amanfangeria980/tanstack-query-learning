import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

const PostsRQ = () => {
    const { data, isLoading, isError, error } = useQuery<Post[]>({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:8000/posts");
            return response.data;
        },
        // this is the bydefault value
        // refetchInterval:false
        // for polling we use this, to make api call after every 3 seconds
        // refetchInterval: 3000,
        // if we want to keep polling data even in the background
        // refetchIntervalInBackground: true,
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error : {error.message}</div>;
    console.log(data);
    return (
        <div className="post-list">
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

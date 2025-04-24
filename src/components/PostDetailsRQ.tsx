import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetailsRQ = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post", id],
        queryFn: async () => {
            const response = await axios.get(
                `http://localhost:8000/posts/${id}`
            );
            return response.data;
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    const { title, body } = data;
    return (
        <div className="post-details-container">
            <h1 className="post-details-title">{title}</h1>
            <p className="post-details-body">{body}</p>
        </div>
    );
};

export default PostDetailsRQ;

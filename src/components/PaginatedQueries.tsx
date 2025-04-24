import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface Fruit {
    id: number;
    name: string;
}

const limit = 6;
const fetchFruits = async (pageNumber: number): Promise<Fruit[]> => {
    const response = await axios.get(
        `http://localhost:8000/fruits?_page=${pageNumber}&_per_page=${limit}`
    );
    return response.data.data;
};

const PaginatedQueries = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError, error } = useQuery<Fruit[]>({
        queryKey: ["fruits", page],
        queryFn: () => fetchFruits(page),
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    return (
        <div className="container">
            {data?.map((fruit) => (
                <div key={fruit.id}>{fruit.name}</div>
            ))}
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Prev Page
            </button>
            <button
                onClick={() => setPage(page + 1)}
                disabled={data.length < limit}
            >
                Next Page
            </button>
        </div>
    );
};

export default PaginatedQueries;

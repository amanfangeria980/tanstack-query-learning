import React from "react";
import Home from "./components/Home";
import PostsTraditional from "./components/PostsTraditional";
import PostsRQ from "./components/PostsRQ";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostDetailsRQ from "./components/PostDetailsRQ";
import PaginatedQueries from "./components/PaginatedQueries";
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts">Traditional Posts</Link>
                        </li>
                        <li>
                            <Link to="/posts-rq">RQ Posts</Link>
                        </li>
                        <li>
                            <Link to="/paginated-queries">
                                Paginated Queries
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<PostsTraditional />} />
                    <Route path="/posts-rq" element={<PostsRQ />} />
                    <Route path="/posts-rq/:id" element={<PostDetailsRQ />} />
                    <Route
                        path="/paginated-queries"
                        element={<PaginatedQueries />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsPage from "./Post/PostsPage";
import CreatePostPage from "./Post/CreatePostPage";
import EditPostPage from "./Post/EditPostPage";
import Auth from "./Auth/Auth";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
					<Route exact path="/" element={<PostsPage />}></Route>
					<Route
						exact
						path="/create-post"
						element={<CreatePostPage />}
					></Route>
					<Route
						exact
						path="/edit-post/:id"
						element={<EditPostPage />}
					></Route>
					<Route exact path="/auth" element={<Auth />}></Route>
				<Route path="*" element={<h1>404 Not found</h1>}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;

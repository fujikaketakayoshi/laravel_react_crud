import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import toastr from "toastr";
import PostsTable from "./PostsTable";
import api from "../../api/axios";

const PostsPage = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = useCallback(async () => {
		const response = await api.get(`/posts`);
		setPosts(response.data.posts);
	}, []);
	// async function getPosts() {
	// 	const response = await api.get(`/posts`);
	// 	setPosts(response.data.posts);
	// }

	const deletePost = useCallback(async (id) => {
		const response = await api.get(`/posts/delete/${id}`);
		toastr.success(response.data.message);
		getPosts();
	}, [getPosts]);
	// async function deletePost(id) {
	// 	const response = await api.get(`/posts/delete/${id}`);
	// 	toastr.success(response.data.message);
	// 	getPosts();
	// }


	useEffect(() => {
		getPosts();
	}, []);

	return (
		<PostsTable
		posts={posts}
		onDelete={deletePost}
		/>
	);
};

export default PostsPage;

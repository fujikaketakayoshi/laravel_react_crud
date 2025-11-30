import React, { useState } from "react";
import { Link } from "react-router-dom";
import toastr from "toastr";
import api from "../../api/axios";
import CreatePostForm from "./CreatePostForm";

const CreatePostPage = () => {
	const [post, setPost] = useState({ title: "", description: ""});
	
	function handleInput(e) {
		const {name, value} = e.target;
		setPost({...post, [name]: value });
	}

	const createPost = async () => {
		try {
			let data = await api.post(`/posts/save`, post);
			setPost({ title: "", description: ""});
			toastr.success('Post saved Successfully')
		} catch (error) {
			let errors = error.response?.data?.errors
			if (errors) {
                Object.keys(errors).forEach(key => toastr.error(errors[key]));
            }
		}
	}
	
	return (
		<div className="container mt-2">
			<div className="card">
				<div className="card-header">
					<div className="d-flex justify-content-between align-items-center">
						<h1>Create Post</h1>
						<Link className="btn btn-secondary" to="/">
							Back
						</Link>
					</div>
				</div>
				<div className="card-body">
					<CreatePostForm
						post={post}
						onChange={handleInput}
						onSubmit={createPost}
					/>
				</div>
			</div>
		</div>
	);
};

export default CreatePostPage;

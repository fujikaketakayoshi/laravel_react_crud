import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toastr from "toastr";
import api from "../../api/axios";
import EditPostForm from "./EditPostForm";

const EditPostPage = () => {
	const [post, setPost] = useState({ title: "", description: ""});
	const {id} = useParams();
	
	const getPost = async () => {
		try {
            const response = await api.get(`/posts/get/${id}`);
            setPost(response.data.post);
        } catch (error) {
            toastr.error("Failed to fetch post");
        }
	}
	
	useEffect(() => {
		getPost();
	}, [id])
	
	const handleInput = (e) => {
		const {name, value} = e.target;
		setPost({...post, [name]: value});
	}
	
	const updatePost = async () => {
		try {
			await api.post(`/posts/update`, post);
			toastr.success('Post updated Successfully');
			getPost();
		} catch (error) {
			const errors = error.response?.data?.errors;
			if (errors) {
                Object.keys(errors).forEach(key => toastr.error(errors[key]));
            }
		}
	}
	
	return (
		<div className="contaner mt-2">
			<div className="card">
				<div className="card-header">
					<div className="d-flex justify-content-between align-items-center">
						<h1>Edit Post</h1>
						<Link className="btn btn-secondary" to="/">
							Back
						</Link>
					</div>
				</div>
				<div className="card-body">
					<EditPostForm
						post={post}
						onChange={handleInput}
						onSubmit={updatePost}
					/>
				</div>
			</div>
		</div>
	);
};

export default EditPostPage;
import React from "react";

const CreatePostForm = ({ post, onChange, onSubmit }) => {
    return (
        <form action="">
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    onChange={onChange}
                    value={post.title}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    className="form-control"
                    onChange={onChange}
                    value={post.description}
                />
            </div>
            <div className="form-group mt-2">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onSubmit}
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default CreatePostForm;
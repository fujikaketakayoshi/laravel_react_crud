import { memo } from "react";
import { Link } from "react-router-dom";
import PostRow from "./PostRow";

const PostsTable = ({ posts, onDelete }) => {
    console.log("🔁 PostsTable 再描画");

    return (
        <div className="container mt-2">
        <div className="card">
            <div className="card-header">
            <div className="d-flex justify-content-between align-item-center">
                <h1>Posts</h1>
                <Link className="btn btn-secondary" to="/create-post">
                Create
                </Link>
            </div>
            </div>

            <div className="card-body">
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post, index) => (
                    <PostRow
                    key={post.id}
                    index={index}
                    post={post}
                    onDelete={onDelete}
                    />
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
};

export default PostsTable;
// export default memo(PostsTable);
import { memo } from "react";
import { Link } from "react-router-dom";

const PostRow = ({ post, index, onDelete }) => {
    return (
        <tr>
        <td>{index + 1}</td>
        <td>{post.title}</td>
        <td>{post.description}</td>
        <td>
            <Link className="btn btn-info" to={`edit-post/${post.id}`}>
            Edit
            </Link>
            <button
            className="btn btn-danger ms-1"
            onClick={() => onDelete(post.id)}
            >
            Delete
            </button>
        </td>
        </tr>
    );
};

export default memo(PostRow);
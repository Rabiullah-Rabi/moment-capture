import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ review, handleDelete }) => {
  const { _id, serviceName, reviewMessage,rating } = review;
  return (
    <tr key={_id}>
      <td>{serviceName}</td>
      <td>{reviewMessage}</td>
      <td>{rating}</td>
      <td>
        <div>
          <button
            className="btn bg-red-500 mr-4"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
          <Link to={`/update/${_id}`}>
            <button className="btn bg-yellow-500">Edit</button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;

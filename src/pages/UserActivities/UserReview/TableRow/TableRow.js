import React from "react";

const TableRow = ({ review, handleDelete }) => {
  const { _id, serviceName, reviewMessage } = review;
  return (
    <tr key={_id}>
      <td>{serviceName}</td>
      <td>{reviewMessage}</td>
      <td>
        <div>
          <button
            className="btn bg-red-500 mr-4"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
          <button className="btn bg-yellow-500">Edit</button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;

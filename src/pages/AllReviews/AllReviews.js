import React, { useEffect, useState } from "react";

const AllReviews = ({service}) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/reviews/${service._id}`)
      .then((res) => res.json())
      .then((data) => {
            console.log(data);
            setReviews(data)
        })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {reviews.map((review) => (
        <>
          <p key={review._id}>{review.reviewMessage}</p>
        </>
      ))}
    </div>
  );
};

export default AllReviews;

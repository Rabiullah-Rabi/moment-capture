import React from "react";
import Rating from "@mui/material/Rating";

const Review = ({ review }) => {
  const { reviewer, reviewMessage, rating, reviewer_Img } = review;
  console.log(typeof rating);
  const floatRating = parseFloat(rating);
  return (
    <div>
      <div className="flex items-center shadow-lg p-4 mt-5">
        <div className="flex flex-col items-center mr-5 w-1/4 text-center">
          <img src={reviewer_Img} className="h-12 w-12 rounded-full" alt="" />
          <h3 className="text-vl font-bold mt-2">{reviewer}</h3>
        </div>
        <div>
          <div>
            <Rating
              name="half-rating-read"
              defaultValue={floatRating}
              precision={0.5}
              readOnly
            />
          </div>
          <p>{reviewMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;

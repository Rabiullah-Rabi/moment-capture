import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { Title } from "../../../App";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import PostReview from "../PostReview/PostReview";
import Review from "../review/Review";

const ServiceDetails = () => {
  const { service } = useLoaderData();
  const { _id, name, img, price, description } = service;
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://moment-capture-server.vercel.app/reviews/${service._id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error(error));
  }, [reviews]);
  return (
    <div className="container mx-auto py-24 grid lg:grid-cols-3 grid-cols-1">
      <Title title="Service" />

      <div className="w-full mx-auto col-span-1 lg:col-span-2 pr-0 lg:pr-5">
        <h1 className="text-5xl font-bold">{name}</h1>
        <img src={img} alt="" className="my-5" />
        <h1 className="text-2xl font-bold">Price : ${price}</h1>
        <p>{description}</p>
      </div>
      {/* review Section */}
      <div>
        <div className={reviews.length === 0 ? "block" : "none"}>
          {reviews.map((review) => (
            <Review key={_id} review={review}></Review>
          ))}
        </div>
        {/* Post review section  */}
        <div>
          {!user ? (
            <div className="text-center mt-5">
              <h1 className="text-2xl font-bold">
                Want to Share Your experience?
              </h1>
              <p>
                You Must{" "}
                <Link
                  to="/login"
                  state={{ from: location }}
                  className="text-red-500"
                >
                  Log in{" "}
                </Link>
                first
              </p>
            </div>
          ) : (
            <PostReview service={service}></PostReview>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

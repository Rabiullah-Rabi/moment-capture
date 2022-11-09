import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Title } from "../../../App";

const UpdateReview = () => {
  const review = useLoaderData();
  const { _id, serviceName, rating, reviewMessage } = review;
  const showToastMessage = () => {
    toast.success("Review Updated", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewMessage = form.review.value;
    const rating = form.rating.value;
    const UpdatedReview = {
      reviewMessage,
      rating,
    };
    fetch(`https://moment-capture-server.vercel.app/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        showToastMessage();
        navigate("/reviews");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Title title="Update Review" />
      <div className="my-10 container mx-auto">
        <div>
          <h1 className="text-3xl text-center">Share Your experience</h1>
        </div>
        <form className="mt-6 mx-auto" onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <input
              defaultValue={serviceName}
              name="serviceName"
              readOnly
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <input
              defaultValue={rating}
              placeholder="rating"
              name="rating"
              type="number"
              min="1"
              max="5"
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <textarea
              defaultValue={reviewMessage}
              placeholder="Review"
              name="review"
              id=""
              cols="30"
              rows="10"
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="Update Review"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform  rounded-md btn"
            />
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdateReview;

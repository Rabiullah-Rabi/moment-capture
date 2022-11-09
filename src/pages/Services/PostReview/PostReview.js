import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostReview = ({ service }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, img } = service;
  const showToastMessage = () => {
    toast.success("Review Added", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  // console.log(user);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email || "unregistered";
    const reviewMessage = form.review.value;
    const rating = form.rating.value;
    const date = new Date();
    const review = {
      service: _id,
      serviceName: name,
      reviewer: user.displayName,
      email,
      reviewMessage,
      rating,
      img,
      reviewer_Img: user.photoURL,
      userId: user.uid,
      review_date: date      
    };
    fetch("https://moment-capture-server.vercel.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        showToastMessage();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="my-10">
        <div>
          <h1 className="text-3xl text-center">Share Your experience</h1>
        </div>
        <form className="mt-6 mx-auto" onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <input
              defaultValue={service?.name}
              name="serviceName"
              readOnly
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <input
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
              value="Post Review"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform  rounded-md btn"
            />
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PostReview;

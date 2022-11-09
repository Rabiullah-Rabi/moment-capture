import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Title } from "../../../App";

const AddService = () => {
  const showToastMessage = () => {
    toast.success("Service Added", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  // console.log(user);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.serviceName.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;
    const date = new Date();
    const service = {
      name: name,
      price: price,
      description: description,
      img: img,
      inserted_date: date,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
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
    <div className="container mx-auto py-10">
      <Title title="Add a service" />
      <div className="my-10">
        <div>
          <h1 className="text-3xl text-center font-bold">Add a Service</h1>
        </div>
        <form className="mt-6 mx-auto" onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <input
              name="serviceName"
              placeholder="Service Name"
              required
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <input
              name="price"
              placeholder="Price"
              required
              type="number"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <input
              placeholder="Thumbnail URL"
              name="img"
              required
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <textarea
              placeholder="Description"
              name="description"
              cols="30"
              rows="10"
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="Add Service"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform  rounded-md btn"
            />
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddService;

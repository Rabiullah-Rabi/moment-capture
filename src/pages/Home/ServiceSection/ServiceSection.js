import React from "react";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Services</h1>
          <p className="py-6 w-full lg:w-3/4 mx-auto">
            Check my services. And feel free to inbox for custom services
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Product photography</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn ">Details</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Product photography</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn ">Details</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Product photography</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn ">Details</button>
              </div>
            </div>
          </div>
              </div>
              <div className="flex justify-center mt-10 ">
                  <Link to="/services" className="btn mx-auto">See All </Link>
              </div>
      </div>
    </div>
  );
};

export default ServiceSection;

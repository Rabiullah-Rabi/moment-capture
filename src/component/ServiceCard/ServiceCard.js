import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, description, img,price } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" className="h-64 w-full object-cover"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="text-xl">Price : ${price}</h2>
        <p>{description.length>100?description.slice(0,100):description}...</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn ">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

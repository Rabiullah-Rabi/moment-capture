import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { service } = useLoaderData();
  const { _id, name, img, price, description } = service;
  return (
    <div className="container mx-auto py-24">
      <div className="w-full lg:w-3/4 mx-auto">
        <h1 className="text-5xl font-bold">{name}</h1>
        <img src={img} alt="" className="my-5" />
        <h1 className="text-2xl font-bold">Price : {price}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;

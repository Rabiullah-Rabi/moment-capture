import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../../component/ServiceCard/ServiceCard";

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://moment-capture-server.vercel.app/servicesHome")
      .then((res) => res.json())
      .then((data) => setServices(data.services))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="container mx-auto py-20 px-3">
      <div className="">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Services</h1>
          <p className="py-6 w-full lg:w-3/4 mx-auto">
            Check my services. And feel free to inbox for custom services
          </p>
        </div>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center mt-10 ">
          <Link to="/services" className="btn mx-auto">
            See All{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

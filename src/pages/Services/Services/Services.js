import React, { useContext } from "react";
import { ColorRing } from "react-loader-spinner";
import { useLoaderData } from "react-router-dom";
import { Title } from "../../../App";
import ServiceCard from "../../../component/ServiceCard/ServiceCard";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const Services = () => {
  const { services } = useLoaderData();
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="container flex justify-center py-32">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  return (
    <div className="container mx-auto py-20 px-5">
      <Title title="Services" />
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
      </div>
    </div>
  );
};

export default Services;

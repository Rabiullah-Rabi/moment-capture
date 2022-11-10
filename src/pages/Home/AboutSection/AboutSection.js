import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse overflow-hidden px-3">
          <img
            src="https://images.unsplash.com/photo-1625492922105-5914617fd869?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
            className="max-w-sm rounded-lg lg:shadow-2xl"
            alt=""
          />
          <div className="px-3">
            <h1 className="text-5xl font-bold">About</h1>
            <h1 className="text-2xl font-bold">Rustom Ali</h1>
            <p className="py-6">
              I`ve been working as a professional wedding photographer all my
              adult life. Right after my graduation from the New Ejjot ALi
              School of Photography in Nowakhali, MA I began doing my gigs.
              After first few years of working for an event agency and with
              dozens of beautiful wedding sets in my portfolio, I decided to
              give it a go and opened up my very own wedding photography
              service.
            </p>
            <button className="btn">Download my CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

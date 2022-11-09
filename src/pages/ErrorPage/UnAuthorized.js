import React from "react";

const UnAuthorized = ({ error }) => {
  const { status, statusText } = error;
  return (
    <div>
      <h1>{status}</h1>
      <h1>{statusText}</h1>
    </div>
  );
};

export default UnAuthorized;

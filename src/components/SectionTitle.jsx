import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h1 className="text-3xl font-medium tracking-wider capitalize">{text}</h1>
    </div>
  );
};

export default SectionTitle;

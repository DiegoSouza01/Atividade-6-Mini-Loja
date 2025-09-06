import React from "react";

const Skeleton = ({ type = "text", width, height, style }) => {
  const className = `skeleton skeleton-${type}`;

  return (
    <div
      className={className}
      style={{ width, height, ...style }}
      aria-hidden="true"
    />
  );
};

export default Skeleton;

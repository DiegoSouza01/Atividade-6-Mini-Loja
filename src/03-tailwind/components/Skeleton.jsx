import React from "react";

const Skeleton = ({ type = "text", width, height, style }) => {
  const baseClasses = "animate-pulse bg-gray-300 dark:bg-gray-700 rounded-md";

  const typeClasses = {
    text: "h-4 w-full mb-2",
    image: "w-full aspect-square",
    button: "w-full h-10",
  };

  return (
    <div
      className={`${baseClasses} ${typeClasses[type] || ""} ${
        width ? `w-[${width}]` : ""
      } ${height ? `h-[${height}]` : ""}`}
      style={{ width, height, ...style }}
      aria-hidden="true"
    />
  );
};

export default Skeleton;

import React from "react";

const Skeleton = ({ type = "text", width = "w-full", height = "h-4" }) => {
  const getClasses = () => {
    switch (type) {
      case "image":
        return "w-full aspect-square bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse";
      case "text":
        return `bg-gray-300 dark:bg-gray-600 rounded animate-pulse ${width} ${height}`;
      case "button":
        return "w-full h-10 bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse";
      default:
        return `bg-gray-300 dark:bg-gray-600 rounded animate-pulse ${width} ${height}`;
    }
  };

  return <div className={getClasses()} aria-hidden="true" />;
};

export default Skeleton;

import React from "react";
import styles from "./Skeleton.module.css";

const Skeleton = ({ type = "text", width, height, style }) => {
  const className = `${styles.skeleton} ${styles[type]}`;

  return (
    <div
      className={className}
      style={{ width, height, ...style }}
      aria-hidden="true"
    />
  );
};

export default Skeleton;

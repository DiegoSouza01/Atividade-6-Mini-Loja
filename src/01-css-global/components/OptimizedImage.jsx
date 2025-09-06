import React, { useState } from "react";

const OptimizedImage = ({ src, alt, width, height, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <>
      {!loaded && !error && (
        <div className="image-placeholder" style={{ width, height }} />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        decoding="async"
        style={{
          display: loaded ? "block" : "none",
          width,
          height,
        }}
        {...props}
      />
    </>
  );
};

export default OptimizedImage;

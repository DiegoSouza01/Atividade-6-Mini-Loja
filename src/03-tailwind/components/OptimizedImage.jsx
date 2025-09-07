import React, { useState } from "react";

const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />

      {error && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl">
          
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;

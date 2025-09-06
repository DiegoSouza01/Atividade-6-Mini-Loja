import React from "react";
import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const SkeletonBase = styled.div`
  animation: ${skeletonLoading} 1.5s infinite;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.background} 25%,
    ${(props) => props.theme.surface} 50%,
    ${(props) => props.theme.background} 75%
  );
  background-size: 200% 100%;
  border-radius: ${(props) => props.theme.radius.md};
`;

const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  aspect-ratio: 1/1;
`;

const SkeletonText = styled(SkeletonBase)`
  height: 1rem;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  width: ${(props) => props.width || "100%"};
`;

const SkeletonButton = styled(SkeletonBase)`
  height: 2.5rem;
`;

const Skeleton = ({ type = "text", width, height, style }) => {
  switch (type) {
    case "image":
      return <SkeletonImage style={{ height, ...style }} aria-hidden="true" />;
    case "text":
      return (
        <SkeletonText
          width={width}
          style={{ height, ...style }}
          aria-hidden="true"
        />
      );
    case "button":
      return (
        <SkeletonButton
          style={{ width, height, ...style }}
          aria-hidden="true"
        />
      );
    default:
      return (
        <SkeletonBase style={{ width, height, ...style }} aria-hidden="true" />
      );
  }
};

export default Skeleton;

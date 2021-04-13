import React, { useState } from "react";
import ContentLoader from "react-content-loader";

const ImagePlaceholder = () => (
  <ContentLoader
    speed={2}
    width={500}
    height={400}
    backgroundColor="#f2f2f2"
    foregroundColor="#ececec"
    viewBox="0 0 500 400"
  >
    <rect x="2" y="2" rx="0" ry="0" width="500" height="400" />
  </ContentLoader>
);

const Image = ({ alt, ...props }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      {!isImageLoaded && <ImagePlaceholder />}
      <img
        {...props}
        style={{ display: `${isImageLoaded ? "block" : "none"}` }}
        alt={alt}
        onLoad={() => setTimeout(() => setIsImageLoaded(true), 1500)}
      />
    </>
  );
};

export default Image;

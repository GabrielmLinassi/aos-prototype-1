import React from "react";

const Map = ({ src, width, height }) => (
  <>
    <iframe
      src={src}
      width={`${width}`}
      height={`${height}`}
      title="Map"
    ></iframe>
  </>
);

export { Map };

import React from "react";

interface SpacerProps {
  height?: string;
}

const Spacer = ({ height = "1rem" }: SpacerProps) => {
  return (
    <div
      style={{
        height,
      }}
    ></div>
  );
};

export default Spacer;

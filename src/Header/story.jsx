import React from "react";

function Story({ src, alt }) {
  return (
    <div style={containerStyle}>
      <div style={circleStyle}>
        <div style={gradientBorder}></div>
        <div style={innerCircle}>
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const circleStyle = {
  width: "80px",
  height: "80px",
  position: "relative",
  borderRadius: "50%",
  overflow: "hidden",
};

const gradientBorder = {
  position: "absolute",
  top: "-3px",
  left: "-3px",
  right: "-3px",
  bottom: "-3px",
  borderRadius: "50%",
  background: "linear-gradient( to right, red, orange)",
  zIndex: 0,
};

const innerCircle = {
  position: "absolute",
  top: "3px",
  left: "3px",
  right: "3px",
  bottom: "3px",
  borderRadius: "50%",
  overflow: "hidden",
  zIndex: 1,
  backgroundColor: "white",
};
export default Story
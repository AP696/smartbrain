import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center">
      <div className="absolute mt2">
        <img
          id="inputImage"
          alt=""
          src={"imageUrl"}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{

          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;

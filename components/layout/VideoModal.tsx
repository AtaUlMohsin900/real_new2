import React, { useState } from "react";

const VideoModal = () => {
  const [vid, setVid] = useState(true);

  return (
    <div className={"vid-m" + (vid ? " vid-a" : " ")}>
      <div className="vid-c">
        <button
          aria-label="close video popup"
          className="close-v"
          onClick={() => setVid(false)}
        >
          <i className="fa-light fa-xmark-large"></i>
        </button>
        <video autoPlay loop muted controls>
          <source src="/images/realitai.mp4" type="video/mp4" width="600" height="400" />
        </video>
        <h5>Hello</h5>
      </div>
    </div>
  );
};

export default VideoModal;

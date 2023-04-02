import React from "react";

const VideoScreen = () => {
  return (
    <div className="video-screen" id="video-screen">
      <div className="video-screen-container">
        <div className="video-screen-heading-container">
          <h3 className="v-screen-heading">Ознакомительное видео</h3>
        </div>
        <div className="video-content">
          <video></video>
          <div className="video-description">
            <h6 className="v-description-h">
              Lorem ipsum dolor sit amet consectetur.
            </h6>
            <p className="v-description-p">
              Lorem ipsum dolor sit amet consectetur. Dolor elementum mi
              consectetur hendrerit ut dui nisl. Etiam eros ipsum eu sit nibh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoScreen;

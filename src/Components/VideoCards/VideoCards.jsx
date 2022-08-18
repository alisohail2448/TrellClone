import { faEye, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./VideoCards.css";
import HoverVideoPlayer from "react-hover-video-player";

const VideoCards = () => {
  return (
    <div className="videoCon">
      <div className="container">
        <div className="videoCard">
          <div className="video">
            <div className="viewIcon">
              <FontAwesomeIcon className="icon" icon={faEye} /> 1232
              <FontAwesomeIcon className="playIcon" icon={faPlayCircle} />
            </div>

            <HoverVideoPlayer
              className="hoverVideo"
              videoSrc="https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/K7EQwvrXujH4PoSTZznkE74F8jrymT13.mp4"
              pausedOverlay={
                <img
                  src="thumbnail-image.jpg"
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />

            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, sunt?
            </h5>
            <div className="profile">
              <img
                src="https://cdn.trell.co/w=200,h=200,fit=smart/user-images/avatar/Ku8NrnvDWo4Ry1TNpOcK4bPdWjIUEhvh.jpeg"
                alt=""
                width={30}
                height={30}
              />
              <p>Shifa Merchant</p>
            </div>
          </div>
        </div>
        <div className="videoCard">
          <div className="video">
            <div className="viewIcon">
              <FontAwesomeIcon className="icon" icon={faEye} /> 1232
              <FontAwesomeIcon className="playIcon" icon={faPlayCircle} />
            </div>

            <HoverVideoPlayer
              className="hoverVideo"
              videoSrc="https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/K7EQwvrXujH4PoSTZznkE74F8jrymT13.mp4"
              pausedOverlay={
                <img
                  src="thumbnail-image.jpg"
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />

            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, sunt?
            </h5>
            <div className="profile">
              <img
                src="https://cdn.trell.co/w=200,h=200,fit=smart/user-images/avatar/Ku8NrnvDWo4Ry1TNpOcK4bPdWjIUEhvh.jpeg"
                alt=""
                width={30}
                height={30}
              />
              <p>Shifa Merchant</p>
            </div>
          </div>
        </div>
        <div className="videoCard">
          <div className="video">
            <div className="viewIcon">
              <FontAwesomeIcon className="icon" icon={faEye} /> 1232
              <FontAwesomeIcon className="playIcon" icon={faPlayCircle} />
            </div>

            <HoverVideoPlayer
              className="hoverVideo"
              videoSrc="https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/K7EQwvrXujH4PoSTZznkE74F8jrymT13.mp4"
              pausedOverlay={
                <img
                  src="thumbnail-image.jpg"
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />

            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, sunt?
            </h5>
            <div className="profile">
              <img
                src="https://cdn.trell.co/w=200,h=200,fit=smart/user-images/avatar/Ku8NrnvDWo4Ry1TNpOcK4bPdWjIUEhvh.jpeg"
                alt=""
                width={30}
                height={30}
              />
              <p>Shifa Merchant</p>
            </div>
          </div>
        </div>
        <div className="videoCard">
          <div className="video">
            <div className="viewIcon">
              <FontAwesomeIcon className="icon" icon={faEye} /> 1232
              <FontAwesomeIcon className="playIcon" icon={faPlayCircle} />
            </div>

            <HoverVideoPlayer
              className="hoverVideo"
              videoSrc="https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/K7EQwvrXujH4PoSTZznkE74F8jrymT13.mp4"
              pausedOverlay={
                <img
                  src="thumbnail-image.jpg"
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />

            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, sunt?
            </h5>
            <div className="profile">
              <img
                src="https://cdn.trell.co/w=200,h=200,fit=smart/user-images/avatar/Ku8NrnvDWo4Ry1TNpOcK4bPdWjIUEhvh.jpeg"
                alt=""
                width={30}
                height={30}
              />
              <p>Shifa Merchant</p>
            </div>
          </div>
        </div>
        <div className="videoCard">
          <div className="video">
            <div className="viewIcon">
              <FontAwesomeIcon className="icon" icon={faEye} /> 1232
              <FontAwesomeIcon className="playIcon" icon={faPlayCircle} />
            </div>

            <HoverVideoPlayer
              className="hoverVideo"
              videoSrc="https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/K7EQwvrXujH4PoSTZznkE74F8jrymT13.mp4"
              pausedOverlay={
                <img
                  src="thumbnail-image.jpg"
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />

            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, sunt?
            </h5>
            <div className="profile">
              <img
                src="https://cdn.trell.co/w=200,h=200,fit=smart/user-images/avatar/Ku8NrnvDWo4Ry1TNpOcK4bPdWjIUEhvh.jpeg"
                alt=""
                width={30}
                height={30}
              />
              <p>Shifa Merchant</p>
            </div>
          </div>
        </div>
        <div className="videoCard">
          <div className="video">
            <div className="viewIcon">
              <FontAwesomeIcon className="icon" icon={faEye} /> 1232
              <FontAwesomeIcon className="playIcon" icon={faPlayCircle} />
            </div>

            <HoverVideoPlayer
              className="hoverVideo"
              videoSrc="https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/K7EQwvrXujH4PoSTZznkE74F8jrymT13.mp4"
              pausedOverlay={
                <img
                  src="thumbnail-image.jpg"
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />

            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, sunt?
            </h5>
            <div className="profile">
              <img
                src="https://cdn.trell.co/w=200,h=200,fit=smart/user-images/avatar/Ku8NrnvDWo4Ry1TNpOcK4bPdWjIUEhvh.jpeg"
                alt=""
                width={30}
                height={30}
              />
              <p>Shifa Merchant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;

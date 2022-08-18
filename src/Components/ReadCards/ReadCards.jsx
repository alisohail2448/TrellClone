import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReadCards.css";

const ReadCards = () => {
  return (
    <div className="readContainer">
      <div className="readContent">
        <div className="mainCard">
          <div className="left">
            <div className="view">
              {" "}
              <FontAwesomeIcon className="icon" icon={faEye} /> 1232
            </div>
            <div className="leftImg"></div>
            <div className="imgContent">
              <p>
                Different ways to generate leads and marketing for your B2B
                business.
              </p>
            </div>
            <div className="profileCon">
              <img
                src="https://cdn.trell.co/w=200,h=200,fit=smart/user-images/avatar/q4KLeyIRivOd4zPUc58tuRACtREdPujD.jpg"
                alt=""
              />
              <p>By Rane Samuel</p>
            </div>
          </div>
          <div className="right">
            <div className="rightImg img">
              <div className="view">
                <FontAwesomeIcon className="icon" icon={faEye} /> 1232
                {" "}
              </div>
            </div>
            <div className="sideImgCon">
              <p>Kylie Jenner digital artwork by Astrida Mascarenhas. #makeinindia #vocalforlocal</p>
            </div>
            <div className="sidePrImg">
              <img src="https://cdn.trell.co/w=200,h=200,fit=smart/user-images/avatar/C4cnTAF887TcGWMrFVchzFAeE8f8SRq7.jpg" alt="" />
              <p>By Astrida Marhahnus</p>
            </div>
            <div className="rightImg">
              <div className="view">
                <FontAwesomeIcon className="icon" icon={faEye} /> 1232
                {" "}
              </div>
            </div>
            <div className="sideImgCon2">
              <p>Kylie Jenner digital artwork by Astrida Mascarenhas. #makeinindia #vocalforlocal</p>
            </div>
            <div className="sidePrImg2">
              <img src="https://cdn.trell.co/w=200,h=200,fit=smart/user-images/avatar/C4cnTAF887TcGWMrFVchzFAeE8f8SRq7.jpg" alt="" />
              <p>By Astrida Marhahnus</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadCards;

import React from "react";
import "./LangCards.css";
import { Link } from "react-router-dom";

const LangCards = () => {
  return (
    <div className="langCards"  >
      <h4>Choose the language you love watching videos in</h4>
      <div className="boxCon" >
      <Link to="/watch" style={{textDecoration: 'none'}} >
      <div className="box box1">
          <h3>English</h3>
          <img
            src="https://cdn.trell.co/images/orig/FGU1mPiJwuBRYsox1xrwniVA2tPyvezO.svg"
            alt=""
          />
        </div>
      </Link>
        <div className="box box2">
          <h3>हिंदी</h3>
          <img
            src="https://cdn.trell.co/images/orig/njtsDv8vIZBp5RDiUWvsLZB0d477Vebu.svg"
            alt=""
          />
        </div>
        <div className="box box3">
          <h3>தமிழ்</h3>
          <img
            src="https://cdn.trell.co/images/orig/uMWymn5OP5vEhbKssHZIlI8eXO8xtgJs.svg"
            alt=""
          />
        </div>
        <div className="box box4">
          <h3>తెలుగు</h3>
          <img
            src="https://cdn.trell.co/images/orig/4Ysots2imMySRn0Y3wcOBLTqXsphEHD2.svg"
            alt=""
          />
        </div>
        <div className="box box5">
          <h3>বাংলা</h3>
          <img
            src="https://cdn.trell.co/images/orig/TeIksUgp5CJlxwfe5tdOeeGwTr6foxW4.svg"
            alt=""
          />
        </div>
      </div>
      <div className="boxCon-2">
        <div className="box box6">
          <h3>ಕನ್ನಡ</h3>
          <img
            src="https://cdn.trell.co/images/orig/M1gvZUMjmvaPUOI8UjlEAg0MziymaFot.svg"
            alt=""
          />
        </div>
        <div className="box box7">
          <h3>മലയാളം</h3>
          <img
            src="https://cdn.trell.co/images/orig/pMnkkswwdmqAGb5xqvk1NH3Me2UU4CEs.svg"
            alt=""
          />
        </div>
        <div className="box box8">
          <h3>मराठी</h3>
          <img
            src="https://cdn.trell.co/images/orig/gHoP7gUkIfxAuC6letomBxXEn6expL7m.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LangCards;

import React from "react";
import BackGround from "../assets/background.png";
import Avatar from "../assets/avatar.png";
import Posts from "./Posts";
import './Top.scss'

const Top = () => {
  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          <div className="img">
            <img
              src={BackGround}
              alt="noimage"
              // style={{ width: "99%", height: "50%" }}
            />
          </div>

          <div className="angela">
            <div className="lee">
              <img
                className="avatar"
                src={Avatar}
                alt="noimage"
                style={{ marginTop: "-80px", paddingLeft: "20px" }}
              />
              <h3>Angela Lee</h3>
              <p>@angee</p>
            </div>
            <div className="posts">
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;

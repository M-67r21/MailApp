import Avatar from "../assets/avatar.png";
import LiveVideo from "./LiveVideo";
import one from "../assets/unsplash1.png";
import two from "../assets/unsplash2.png";
import Likes from "./Likes";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faregular faface-smile } from "@fortawesome/free-solid-svg-icons";

const BottomRight = () => {
  return (
    <div className="bottomRight">
      <div
        className="mind"
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        <img src={Avatar} alt="" height="35" />
        <p>What's on your mind?</p>
      </div>
      <div className="live">
        <LiveVideo />
      </div>
      <div
        className="time"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="ago" style={{ display: "flex", alignItems: "center" }}>
          <img src={Avatar} alt="" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3>Angela Lee</h3> <br />
            <p>56 mins ago</p>
          </div>
        </div>
        <p style={{ fontSize: "10px" }}>
          Here are some photography works that I made <br /> on the weekend with
          some of my friends, <br />
          happy for that!
        </p>
        <div className="img" style={{ gap: "20px" }}>
          <img src={one} alt="" width="200" height="50" />
          <img src={two} alt="" width="200" height="50" />
        </div>
        <div className="likes">
          <Likes />
        </div>
        <div className="msg">
          <input type="text" placeholder="Write your message" />
        </div>
      </div>
    </div>
  );
};

export default BottomRight;

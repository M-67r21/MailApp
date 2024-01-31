import Range from "./Range";
import "./BottomLeft.scss";
import Info from "./Info";
import one from "../assets/unsplash1.png";
import two from "../assets/unsplash2.png";

const BottomLeft = () => {
  return (
    <div className="bottom-left">
      <div className="range">
        <h4>Complete Your Profile</h4> <br />
        <Range />
      </div>
      <div className="intro">
        <div className="intro-con">
          <div className="intro1">
            <h4>Intro</h4>
            <p>...</p>
          </div>
          <p>I am an experienced joiner with well developed skills.</p>
          <div className="items">
            <Info />
          </div>
          <div className="images">
            <div className="photos">
              <h4>Photos</h4>
              <p>See All</p>
            </div>
            <div className="one">
              <img src={one} alt="" />
              <img src={two} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomLeft;

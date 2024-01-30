import Range from "./Range";
import "./BottomLeft.scss";
import Info from "./Info";


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
          <Info/>
        </div>

        <p>I am an experienced joiner with well developed skills.</p>
      </div>
    </div>
  );
};

export default BottomLeft;

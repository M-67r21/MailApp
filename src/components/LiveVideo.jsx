import Video from "../assets/video.png";
import star from "../assets/star.png";
import photo from "../assets/photo.png";
import './LiveVideo.scss'

const LiveVideo = () => {
  const items = [
    {
      icon: Video,
      name: "LiveVideo",
    },
    {
      icon: photo,
      name: "ImageVideo",
    },
    {
      icon: star,
      name: "Activity",
    },
  ];
  return (
    <div className="live" style={{ }}>
      {items &&
        items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.icon} alt="" /> <span>{item.name}</span>
          </div>
        ))}
    </div>
  );
};

export default LiveVideo;

import map from "../assets/map-pin.png";
import briefcase from "../assets/briefcase.png";
import events from "../assets/events.png";
import ink from "../assets/ink.png";

const Info = () => {
  const infoItem = [
    {
      icon: map,
      name: "2972 Westheimer Rd.",
    },
    {
      icon: briefcase,
      name: "Binford Ltd..",
    },
    {
      icon: events,
      name: "September 24, 2017.",
    },
    {
      icon: ink,
      name: "dribbble.com/Angela.",
    },
  ];

  return (
    <div className="info" style={{ backgroundColor: "white" }}>
      {infoItem.map((item, index) => (
        <div
          className="infoitems"
          key={index}
          style={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
        >
          <img src={item.icon} alt="" />
          <p style={{ fontSize: "14px" }}>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;

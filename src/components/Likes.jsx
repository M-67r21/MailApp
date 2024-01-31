import heart from "../assets/heart.png";
import share from "../assets/share.png";
import message from "../assets/messages.png";

const Likes = () => {
  const likes = [
    {
      icon: heart,
      name: "2.6K Likes",
    },
    {
      icon: message,
      name: "297 Comments",
    },
    {
      icon: share,
      name: "201K Share",
    },
  ];
  return(
    <div className="likes" style={{display:"flex", gap:"20px"}}>
        {likes.map((item, index) =>(
            <div className="like" key={index} style={{display:'flex', flexDirection:"row"}}>
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
            </div>
        ))}
    </div>
  ) 
};

export default Likes;

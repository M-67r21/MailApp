import './Posts.scss'
const Posts = () => {
    const posts = [
      {
        name: "Posts",
        number: 683,
      },
      {
        name: "Friends",
        number: '5.7K',
      },
      {
        name: "Photos",
        number: 296,
      },
      {
        name: "Likes",
        number: '10.7k',
      },
    ];
  return (
    <div className='posts'>
      {posts && posts.map((item, index) =>(
        <div className='postitems' key={index}>
            <h2>{item.name}</h2> <br />
            <p>{item.number}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts

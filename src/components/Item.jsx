import "./Item.css";

const Item = (props) => {
  const { item, toggleLiked, deleteItem } = props;

  return (
    <div className={item.liked ? "weatherItem liked" : "weatherItem disLinked"}>
      <p>Date: {new Date(item.dt * 1000).toLocaleString()}</p>
      <p>Temp: {Math.round(item.main.temp - 273)}℃</p>
      <p>Desc: {item.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
        alt={item.weather[0].description}
      />
      <button onClick={() => toggleLiked(item.dt)}>
        {item.liked ? "Liked" : "DisLiked"}
      </button>
      <button onClick={() => deleteItem()}>Remove</button>
    </div>
  );
};

export default Item;

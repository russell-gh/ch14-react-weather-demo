import Item from "./Item";

const Weather = (props) => {
  const { list, toggleLiked, deleteItem } = props;

  return list.map((item) => {
    return <Item key={item.dt} item={item} toggleLiked={toggleLiked} />;
  });
};

export default Weather;

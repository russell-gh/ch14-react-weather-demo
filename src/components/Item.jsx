import React, { Component } from "react";

class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="weatherItem">
        <p>Date: {new Date(item.dt * 1000).toLocaleDateString()}</p>
        <p>Temp: {Math.round(item.main.temp - 273)}℃</p>
        <p>Desc: {item.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
          alt={item.weather[0].description}
        />
      </div>
    );
  }
}

export default Item;

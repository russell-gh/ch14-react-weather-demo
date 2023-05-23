import React, { Component } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";

class App extends Component {
  state = { location: "London,UK" };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&appid=37b29f091f8754cf8600dea56dee3863`
    );
    this.setState({ weather: data });
  }

  onSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  onTempInput = (e) => {
    console.log("hi");
    this.setState({ tempInput: e.target.value });
  };

  getFilteredList = () => {
    const { weather, searchInput, tempInput } = this.state;

    let filteredList = [...weather.list];

    //filter by serch
    if (searchInput) {
      filteredList = filteredList.filter((item) => {
        if (
          item.weather[0].description
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        ) {
          return true;
        }
      });
    }

    //sort by temp
    if (tempInput === "asc") {
      filteredList.sort((itemOne, itemTwo) => {
        if (itemOne.main.temp > itemTwo.main.temp) return 1;
        if (itemOne.main.temp < itemTwo.main.temp) return -1;
      });
    } else if (tempInput === "desc") {
      filteredList.sort((itemOne, itemTwo) => {
        if (itemOne.main.temp > itemTwo.main.temp) return -1;
        if (itemOne.main.temp < itemTwo.main.temp) return 1;
      });
    }

    //return the result of the filter and the sort
    return filteredList;
  };

  render() {
    console.log(this.state);
    const { weather, searchInput } = this.state;

    if (!weather) return <p>Loading....</p>;

    //calculate the data we want to show

    return (
      <Weather
        list={this.getFilteredList()}
        onSearchInput={this.onSearchInput}
        onTempInput={this.onTempInput}
      />
    );
  }
}

export default App;

import React, { Component } from "react";
import { connect } from "react-redux";

import Weather from "./Weather";

class App extends Component {
  getFilteredList = () => {
    const { weather, searchInput, tempInput } = this.props;

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
    return <Weather list={this.getFilteredList()} />;
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather,
    location: state.location,
    searchInput: state.searchInput,
    tempInput: state.tempInput,
  };
}

export default connect(mapStateToProps)(App);

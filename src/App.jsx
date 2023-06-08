import React, { Component } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";
import { connect } from "react-redux";
import { NEW_API_DATA, SET_SEARCH_INPUT, SET_TEMP_INPUT } from "./store/types";
import Interface from "./components/Interface";
import { getApiData } from "./controllers/data";

class App extends Component {
  async componentDidMount() {
    getApiData("London");
  }

  render() {
    const { weather } = this.props;

    if (!weather) return <p>Loading....</p>;

    return <Interface />;
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather,
    location: state.location,
  };
}

export default connect(mapStateToProps)(App);

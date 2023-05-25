import React, { Component } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";
import { connect } from "react-redux";
import { NEW_API_DATA, SET_SEARCH_INPUT, SET_TEMP_INPUT } from "./store/types";
import Interface from "./components/Interface";

class App extends Component {
  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.location}&appid=37b29f091f8754cf8600dea56dee3863`
    );
    this.props.dispatch({ type: NEW_API_DATA, payload: data });
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_SEARCH_INPUT, SET_TEMP_INPUT } from "../store/types";

class Controls extends Component {
  onSearchInput = (e) => {
    this.props.dispatch({ type: SET_SEARCH_INPUT, payload: e.target.value });
  };

  onTempInput = (e) => {
    this.props.dispatch({ type: SET_TEMP_INPUT, payload: e.target.value });
  };

  render() {
    return (
      <>
        <input onInput={this.onSearchInput} type="text" />
        <select onInput={this.onTempInput}>
          <option value=""></option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </>
    );
  }
}

export default connect()(Controls);

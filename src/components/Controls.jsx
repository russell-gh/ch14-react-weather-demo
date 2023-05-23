import React, { Component } from "react";

class Controls extends Component {
  render() {
    const { onSearchInput, onTempInput } = this.props;

    return (
      <>
        <input onInput={this.props.onSearchInput} type="text" />
        <select onInput={onTempInput}>
          <option value=""></option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </>
    );
  }
}

export default Controls;

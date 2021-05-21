// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: "" });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  //update Redux store when user hits submit button
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BandInput;

import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  //set up dispatch action and pass down as props to Child
  renderBands = () =>
    this.props.bands.map((band, id) => <li key={id}>{band.name}</li>);
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    bands: state.bands,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    addBand: (band) => dispatch({ type: "ADD_BAND", band }),
  };
};
export default connect(mapStateToProps, mapDispatchToState)(BandsContainer);

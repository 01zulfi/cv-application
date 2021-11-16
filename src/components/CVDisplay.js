import React, { Component } from "react";
import PropTypes from "prop-types";

class CVDisplay extends Component {
// constructor(props) {
  //  super(props)
// }

  render() {
    const { style } = this.props;
    return (
      <div style={style}>
        <div>Name</div>

      </div>
    );
  }
}

CVDisplay.propTypes = {
  style: PropTypes.object,
};

CVDisplay.defaultProps = {
  style: {},
};

export default CVDisplay;

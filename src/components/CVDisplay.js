import React, { Component } from "react";
import PropTypes from "prop-types";

class CVDisplay extends Component {
  render() {
    const { style, CVData } = this.props;
    return (
      <div style={style}>
        <div>{CVData.general.firstName}</div>

      </div>
    );
  }
}

CVDisplay.propTypes = {
  style: PropTypes.object,
  CVData: PropTypes.object,
};

CVDisplay.defaultProps = {
  style: {},
  CVData: {},
};

export default CVDisplay;

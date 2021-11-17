import React, { Component } from "react";
import PropTypes from "prop-types";

class CVDisplay extends Component {
  render() {
    const { style, CVData } = this.props;
    const { general } = CVData;
    return (
      <div style={style}>
        <div className="general-info-display">
          <p>
            {general.firstName}
            {" "}
            {general.lastName}
          </p>
          <p>{general.email}</p>
          <p>{general.phone}</p>
        </div>
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

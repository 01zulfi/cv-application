import React, { Component } from "react";
import PropTypes from "prop-types";

class CVDisplay extends Component {
  render() {
    const { style, CVData } = this.props;
    const { general, education } = CVData;

    const educationDiv = (data) => (
      <div key={data.id} className="education-info-display">
        <p>{data.educationTitle}</p>
        <p>{data.educationInstitute}</p>
        <p>{data.educationStartDate}</p>
        <p>{data.educationEndDate}</p>
      </div>
    );

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
        {education.map((el) => educationDiv(el))}
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

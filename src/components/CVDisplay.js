import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/CVDisplay.css";

class CVDisplay extends Component {
  render() {
    const { style, CVData } = this.props;
    const { general, education, work } = CVData;

    const generalDiv = (
      <div className="general-info-display">
        <p className="name-display">
          {general.firstName}
          {" "}
          {general.lastName}
        </p>
        <p className="title-display">{general.title}</p>
        <p>{general.email}</p>
        <p>{general.phone}</p>
        <p>{general.objective}</p>
      </div>
    );

    const educationDiv = (data) => (
      <div key={data.id} className="education-info-display">
        <p>{data.educationQualification}</p>
        <p>{data.educationInstitute}</p>
        <p>{data.educationStartDate}</p>
        <p>{data.educationEndDate}</p>
      </div>
    );

    const workDiv = (data) => (
      <div key={data.id} className="work-info-display">
        <p>{data.workTitle}</p>
        <p>{data.workCompany}</p>
        <p>{data.workStartDate}</p>
        <p>{data.workEndDate}</p>
      </div>
    );

    return (
      <div style={style} className="CV-display-div">
        {generalDiv}
        <hr />
        {education.map((el) => educationDiv(el))}
        {work.map((el) => workDiv(el))}
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

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
        <div className="contact-details-div">
          <p>{general.email}</p>
          <p>{general.phone}</p>
        </div>
        <p>{general.objective}</p>
      </div>
    );

    const educationDiv = (data) => (
      <div key={data.id} className="education-info-display">
        <p className="education-qualification-display">{data.educationQualification}</p>
        <p>{data.educationInstitute}</p>
        <p className="education-time">
          From:
          {data.educationStartDate}
          {" "}
          {" "}
          To:
          {" "}
          {data.educationEndDate}
        </p>
      </div>
    );

    const workDiv = (data) => (
      <div key={data.id} className="work-info-display">
        <p className="work-title-display">{data.workTitle}</p>
        <p>{data.workCompany}</p>
        <p className="work-time">
          From:
          {data.workStartDate}
          {" "}
          {" "}
          To:
          {" "}
          {data.workEndDate}
        </p>
        <p className="work-responsibilities">{data.workResponsibilities}</p>
      </div>
    );

    return (
      <div style={style} className="CV-display-div">
        {generalDiv}
        <hr />
        <div className="CV-body-div">
          <div className="education-section">
            <h2>Education</h2>
            {education.map((el) => educationDiv(el))}
          </div>
          <div className="vertical-line" />
          <div className="work-section">
            <h2>Work</h2>
            {work.map((el) => workDiv(el))}
          </div>
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

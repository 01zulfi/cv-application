import React, { Component } from "react";
import PropTypes from "prop-types";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkInfoForm from "./WorkInfoForm";
import "../styles/CVInput.css";

class CVInput extends Component {
  render() {
    const { style, dataHandler } = this.props;

    return (
      <div className="CV-input" style={style}>
        <GeneralInfoForm dataHandler={dataHandler} />
        <EducationInfoForm dataHandler={dataHandler} />
        <WorkInfoForm dataHandler={dataHandler} />
      </div>
    );
  }
}

CVInput.propTypes = {
  style: PropTypes.object,
  dataHandler: PropTypes.func,
};

CVInput.defaultProps = {
  style: {},
  dataHandler: () => {},
};

export default CVInput;

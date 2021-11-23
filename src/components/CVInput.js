import React from "react";
import PropTypes from "prop-types";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkInfoForm from "./WorkInfoForm";
import SkillsInfoForm from "./SkillsInfoForm";
import "../styles/CVInput.css";

const CVInput = function ({ style, dataHandler }) {
  return (
    <div className="CV-input" style={style}>
      <GeneralInfoForm dataHandler={dataHandler} />
      <EducationInfoForm dataHandler={dataHandler} />
      <WorkInfoForm dataHandler={dataHandler} />
      <SkillsInfoForm dataHandler={dataHandler} />
    </div>
  );
};

CVInput.propTypes = {
  style: PropTypes.object,
  dataHandler: PropTypes.func,
};

CVInput.defaultProps = {
  style: {},
  dataHandler: () => {},
};

export default CVInput;

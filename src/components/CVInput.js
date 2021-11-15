import React, { Component } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkInfoForm from "./WorkInfoForm";

class CVInput extends Component {
  render() {
    return (
      <div className="CVInput">
        <GeneralInfoForm />
        <EducationInfoForm quantity={2} />
        <button className="add-education-button" type="button">Add Education</button>
        <WorkInfoForm />
      </div>
    );
  }
}

export default CVInput;

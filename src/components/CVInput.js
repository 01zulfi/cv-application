import React, { Component } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkInfoForm from "./WorkInfoForm";

class CVInput extends Component {
  render() {
    return (
      <div className="CVInput">
        <GeneralInfoForm />
        <EducationInfoForm />
        <WorkInfoForm />
      </div>
    );
  }
}

export default CVInput;

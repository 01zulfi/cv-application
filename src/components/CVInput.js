import React, { Component } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationInfoForm from "./EducationInfoForm";

class CVInput extends Component {
  render() {
    return (
      <div className="CVInput">
        <GeneralInfoForm />
        <EducationInfoForm />
      </div>
    );
  }
}

export default CVInput;

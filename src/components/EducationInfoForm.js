import React, { Component } from "react";

class EducationInfoForm extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <form>
          <label htmlFor="school">
            School
            <input type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default EducationInfoForm;

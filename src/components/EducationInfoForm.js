import React, { Component } from "react";

class EducationInfoForm extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <form>
          <label htmlFor="education-title">
            Title:
            <input type="text" id="education-title" />
          </label>
          <label htmlFor="education-institute">
            Institute:
            <input type="text" id="education-institute" />
          </label>
          <label htmlFor="education-start-date">
            From:
            <input type="date" id="education-start-date" />
          </label>
          <label htmlFor="education-end-date">
            To:
            <input type="date" id="education-end-date" />
          </label>
          <button type="button">Add Education</button>
        </form>
      </div>
    );
  }
}

export default EducationInfoForm;

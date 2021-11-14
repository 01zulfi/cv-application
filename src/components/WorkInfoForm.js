import React, { Component } from "react";

class WorkInfoForm extends Component {
  render() {
    return (
      <div className="work-info-form">
        <h2>Work </h2>
        <label htmlFor="work-title">
          Title:
          <input type="text" id="work-title" />
        </label>
        <label htmlFor="work-company">
          Company:
          <input type="text" id="work-company" />
        </label>
        <label htmlFor="work-start-date">
          From:
          <input type="date" id="work-start-date" />
        </label>
        <label htmlFor="work-end-date">
          To:
          <input type="date" id="work-end-date" />
        </label>
        <button type="button">Add Work</button>
      </div>
    );
  }
}

export default WorkInfoForm;

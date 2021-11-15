import React, { Component } from "react";
import PropTypes from "prop-types";

class EducationInfoForm extends Component {
  render() {
    const { quantity } = this.props;

    const form = (
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
      </form>
    );

    return (
      <div>
        <h2>Education</h2>
        {quantity.map((el) => <div key={el.id}>{form}</div>)}
      </div>
    );
  }
}

EducationInfoForm.propTypes = {
  quantity: PropTypes.array,
};

EducationInfoForm.defaultProps = {
  quantity: [],
};

export default EducationInfoForm;

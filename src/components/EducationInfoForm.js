import React, { Component } from "react";
import PropTypes from "prop-types";

class EducationInfoForm extends Component {
  render() {
    const { quantity } = this.props;

    const renderForm = (renderQuantity) => {
      const arr = [];
      for (let i = 0; i < renderQuantity; i += 1) {
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
        arr.push(form);
      }
      return arr;
    };

    return (
      <div>
        <h2>Education</h2>
        {renderForm(quantity).map((form) => <div>{form}</div>)}
      </div>
    );
  }
}

EducationInfoForm.propTypes = {
  quantity: PropTypes.number,
};

EducationInfoForm.defaultProps = {
  quantity: 1,
};

export default EducationInfoForm;

import React, { Component } from "react";
import PropTypes from "prop-types";

class WorkInfoForm extends Component {
  render() {
    const form = (
      <form>
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
      </form>

    );

    const { quantity } = this.props;

    return (
      <div className="work-info-form">
        <h2>Work </h2>
        {quantity.map((el) => <div key={el.id}>{form}</div>)}
      </div>
    );
  }
}

WorkInfoForm.propTypes = {
  quantity: PropTypes.array,
};

WorkInfoForm.defaultProps = {
  quantity: [],
};

export default WorkInfoForm;

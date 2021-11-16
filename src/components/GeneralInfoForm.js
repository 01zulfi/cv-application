import React, { Component } from "react";
import PropTypes from "prop-types";

class GeneralInfoForm extends Component {
  render() {
    const { dataHandler } = this.props;

    return (
      <div>
        <h2>
          General
        </h2>
        <form>
          <label htmlFor="first-name-input">
            First Name:
            <input type="text" id="first-name-input" onChange={dataHandler} />
          </label>
          <label htmlFor="last-name-input">
            Last Name:
            <input type="text" id="last-name-input" onChange={dataHandler} />
          </label>
          <label htmlFor="email-input">
            Email:
            <input type="email" id="email-input" onChange={dataHandler} />
          </label>
          <label htmlFor="phone-number-input">
            Phone Number:
            <input type="text" id="phone-number-input" onChange={dataHandler} />
          </label>
        </form>
      </div>
    );
  }
}

GeneralInfoForm.propTypes = {
  dataHandler: PropTypes.func,
};

GeneralInfoForm.defaultProps = {
  dataHandler: () => {},
};

export default GeneralInfoForm;

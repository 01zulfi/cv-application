import React, { Component } from "react";

class GeneralInfoForm extends Component {
  render() {
    return (
      <div>
        <h2>
          General
        </h2>
        <form>
          <label htmlFor="first-name-input">
            First Name:
            <input type="text" id="first-name-input" />
          </label>
          <label htmlFor="last-name-input">
            Last Name:
            <input type="text" id="last-name-input" />
          </label>

          <label htmlFor="email-input">
            Email:
            <input type="email" id="email-input" />
          </label>
          <label htmlFor="phone-number-input">
            Phone Number:
            <input type="text" id="phone-number-input" />
          </label>
        </form>
      </div>
    );
  }
}

export default GeneralInfoForm;

import React, { Component } from "react";

class GeneralInfoForm extends Component {
  render() {
    return (
      <div>
        <h2>
          General
        </h2>
        <form>
          <label htmlFor="name-input">
            Name:
            <input type="text" id="name-input" />
          </label>
          <label htmlFor="email-input">
            Email:
            <input type="email" id="email-input" />
          </label>
          <label htmlFor="phone-number-input">
            Phone Number:
            <input type="text" id="phone-number-input" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralInfoForm;

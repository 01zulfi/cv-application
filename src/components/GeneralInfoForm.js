import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/GeneralInfoForm.css";

class GeneralInfoForm extends Component {
  constructor(props) {
    super(props);

    this.generalInfoData = {
      firstName: "", lastName: "", email: "", phone: "",
    };

    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(event) {
    const { dataHandler } = this.props;

    if (event.target.id === "first-name-input") {
      this.generalInfoData.firstName = event.target.value;
    }
    if (event.target.id === "last-name-input") {
      this.generalInfoData.lastName = event.target.value;
    }
    if (event.target.id === "email-input") {
      this.generalInfoData.email = event.target.value;
    }
    if (event.target.id === "phone-number-input") {
      this.generalInfoData.phone = event.target.value;
    }
    dataHandler("general", this.generalInfoData);
  }

  render() {
    return (
      <div className="general-info-form-div">
        <h2>
          General
        </h2>
        <form>
          <label htmlFor="first-name-input">
            First Name:
            <input type="text" id="first-name-input" onChange={this.inputHandler} />
          </label>
          <label htmlFor="last-name-input">
            Last Name:
            <input type="text" id="last-name-input" onChange={this.inputHandler} />
          </label>
          <label htmlFor="email-input">
            Email:
            <input type="email" id="email-input" onChange={this.inputHandler} />
          </label>
          <label htmlFor="phone-number-input">
            Phone Number:
            <input type="text" id="phone-number-input" onChange={this.inputHandler} />
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

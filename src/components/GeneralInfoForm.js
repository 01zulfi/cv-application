import React from "react";
import PropTypes from "prop-types";
import "../styles/GeneralInfoForm.css";

const GeneralInfoForm = function ({ dataHandler }) {
  const generalInfoData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    objective: "",
  };

  const inputHandler = (event) => {
    if (event.target.id === "first-name-input") {
      generalInfoData.firstName = event.target.value;
    }
    if (event.target.id === "last-name-input") {
      generalInfoData.lastName = event.target.value;
    }
    if (event.target.id === "email-input") {
      generalInfoData.email = event.target.value;
    }
    if (event.target.id === "phone-number-input") {
      generalInfoData.phone = event.target.value;
    }
    if (event.target.id === "job-title-input") {
      generalInfoData.title = event.target.value;
    }
    if (event.target.id === "objective-input") {
      generalInfoData.objective = event.target.value;
    }

    dataHandler("general", generalInfoData);
  };

  return (
    <div className="general-info-form-div">
      <h2>
        General
      </h2>
      <form>
        <label htmlFor="first-name-input">
          First Name:
          <input type="text" id="first-name-input" onChange={inputHandler} />
        </label>
        <label htmlFor="last-name-input">
          Last Name:
          <input type="text" id="last-name-input" onChange={inputHandler} />
        </label>
        <label htmlFor="email-input">
          Email:
          <input type="email" id="email-input" onChange={inputHandler} />
        </label>
        <label htmlFor="phone-number-input">
          Phone Number:
          <input type="text" id="phone-number-input" onChange={inputHandler} />
        </label>
        <label htmlFor="job-title-input">
          Title:
          <input type="text" id="job-title-input" onChange={inputHandler} />
        </label>
        <label htmlFor="objective-input">
          Objective:
          <textarea type="text" id="objective-input" onChange={inputHandler} />
        </label>
      </form>
    </div>
  );
};

GeneralInfoForm.propTypes = {
  dataHandler: PropTypes.func,
};

GeneralInfoForm.defaultProps = {
  dataHandler: () => {},
};

export default GeneralInfoForm;

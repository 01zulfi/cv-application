import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/GeneralInfoForm.css";

const GeneralInfoForm = function ({ dataHandler }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [objective, setObjective] = useState("");

  const data = {
    firstName, lastName, email, phone, title, objective,
  };

  const inputHandler = (event) => {
    if (event.target.id === "first-name-input") {
      setFirstName(event.target.value);
    }
    if (event.target.id === "last-name-input") {
      setLastName(event.target.value);
    }
    if (event.target.id === "email-input") {
      setEmail(event.target.value);
    }
    if (event.target.id === "phone-number-input") {
      setPhone(event.target.value);
    }
    if (event.target.id === "job-title-input") {
      setTitle(event.target.value);
    }
    if (event.target.id === "objective-input") {
      setObjective(event.target.value);
    }
  };

  const sendData = (attr) => {
    dataHandler("general", {
      ...data, attr,
    });
  };

  useEffect(() => {
    sendData({ firstName });
  }, [firstName]);

  useEffect(() => {
    sendData({ lastName });
  }, [lastName]);

  useEffect(() => {
    sendData({ email });
  }, [email]);

  useEffect(() => {
    sendData({ phone });
  }, [phone]);

  useEffect(() => {
    sendData({ objective });
  }, [objective]);

  useEffect(() => {
    sendData({ title });
  }, [title]);

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

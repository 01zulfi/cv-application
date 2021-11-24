import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/EducationInfoForm.css";

const uniqueId = () => Math.floor(Math.random() * Date.now());

const EducationInfoForm = function ({ dataHandler }) {
  const [data, setData] = useState([]);

  const removeForm = (event) => {
    const id = event.target.parentNode.getAttribute("data-id");
    const newData = data.filter((el) => el.id !== Number(id));

    dataHandler("education", newData);
    setData(newData);
  };

  const incrementQuantity = () => {
    setData(data.concat({ id: uniqueId() }));
  };

  const inputHandler = (event) => {
    const id = Number(event.target.closest("form").getAttribute("data-id"));
    let newData = [];

    if (event.target.id === "education-qualification") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationQualification = event.target.value;
        }
        return newObj;
      });
    }
    if (event.target.id === "education-institute") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationInstitute = event.target.value;
        }
        return newObj;
      });
    }
    if (event.target.id === "education-start-date") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationStartDate = event.target.value;
        }
        return newObj;
      });
    }
    if (event.target.id === "education-end-date") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationEndDate = event.target.value;
        }
        return newObj;
      });
    }

    dataHandler("education", newData);
    setData(newData);
  };

  const isPresentHandler = (event) => {
    if (event.target.id !== "is-present") return;

    const { checked } = event.target;
    const form = event.target.closest("form");
    const id = Number(form.getAttribute("data-id"));
    let newData = [];
    const endDateInput = form.querySelector("#education-end-date");

    if (!checked) {
      endDateInput.removeAttribute("disabled");

      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationEndDate = endDateInput.value || "";
        }
        return newObj;
      });
    } else {
      endDateInput.setAttribute("disabled", "true");
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationEndDate = "Present";
        }
        return newObj;
      });
    }

    dataHandler("education", newData);
    setData(newData);
  };

  const form = (id) => (
    <form data-id={id}>
      Qualification:
      <input type="text" id="education-qualification" onChange={inputHandler} />
      Institute:
      <input type="text" id="education-institute" onChange={inputHandler} />
      From:
      <input type="date" id="education-start-date" onChange={inputHandler} />
      To:
      <input type="date" id="education-end-date" onChange={inputHandler} />
      <div className="is-present-checkbox">
        Present
        <input type="checkbox" id="is-present" onChange={isPresentHandler} />
      </div>
      <button type="button" onClick={removeForm}>Delete</button>
    </form>
  );

  return (
    <div className="education-info-form-div">
      <h2>Education</h2>
      <button type="button" onClick={incrementQuantity}>Add Education</button>
      {data.map((el) => <div key={el.id}>{form(el.id)}</div>)}
    </div>
  );
};

EducationInfoForm.propTypes = {
  dataHandler: PropTypes.func,
};

EducationInfoForm.defaultProps = {
  dataHandler: () => {},
};

export default EducationInfoForm;

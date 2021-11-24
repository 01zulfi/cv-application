import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/WorkInfoForm.css";

const uniqueId = () => Math.floor(Math.random() * Date.now());

const WorkInfoForm = function ({ dataHandler }) {
  const [data, setData] = useState([]);

  const removeForm = (event) => {
    const id = event.target.parentNode.getAttribute("data-id");
    const newData = data.filter((el) => el.id !== Number(id));

    dataHandler("work", newData);
    setData(newData);
  };

  const incrementQuantity = () => {
    setData(data.concat({ id: uniqueId() }));
  };

  const inputHandler = (event) => {
    const id = Number(event.target.closest("form").getAttribute("data-id"));
    let newData = [];

    if (event.target.id === "work-title") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.workTitle = event.target.value;
        }
        return newObj;
      });
    }
    if (event.target.id === "work-company") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.workCompany = event.target.value;
        }
        return newObj;
      });
    }
    if (event.target.id === "work-start-date") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.workStartDate = event.target.value;
        }
        return newObj;
      });
    }
    if (event.target.id === "work-end-date") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.workEndDate = event.target.value;
        }
        return newObj;
      });
    }
    if (event.target.id === "work-responsibilites") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.workResponsibilities = event.target.value;
        }
        return newObj;
      });
    }

    dataHandler("work", newData);
    setData(newData);
  };

  const isPresentHandler = (event) => {
    if (event.target.id !== "is-present") return;

    const { checked } = event.target;
    const form = event.target.closest("form");
    const id = Number(form.getAttribute("data-id"));
    let newData = [];
    const endDateInput = form.querySelector("#work-end-date");

    if (!checked) {
      endDateInput.removeAttribute("disabled");

      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.workEndDate = endDateInput.value || "";
        }
        return newObj;
      });
    } else {
      endDateInput.setAttribute("disabled", "true");

      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.workEndDate = "Present";
        }
        return newObj;
      });
    }

    dataHandler("work", newData);
    setData(newData);
  };

  const form = (id) => (
    <form data-id={id}>
      Title:
      <input type="text" id="work-title" onChange={inputHandler} />
      Company:
      <input type="text" id="work-company" onChange={inputHandler} />
      From:
      <input type="date" id="work-start-date" onChange={inputHandler} />
      To:
      <input type="date" id="work-end-date" onChange={inputHandler} />
      <div className="is-present-checkbox">
        Present
        <input type="checkbox" id="is-present" onChange={isPresentHandler} />
      </div>
      Responsibilites:
      <textarea type="text" id="work-responsibilites" onChange={inputHandler} />
      <button type="button" onClick={removeForm}>Delete</button>
    </form>
  );

  return (
    <div className="work-info-form-div">
      <h2>Work </h2>
      <button type="submit" onClick={incrementQuantity}>Add Work</button>
      {data.map((el) => <div key={el.id}>{form(el.id)}</div>)}
    </div>
  );
};

WorkInfoForm.propTypes = {
  dataHandler: PropTypes.func,
};

WorkInfoForm.defaultProps = {
  dataHandler: () => {},
};

export default WorkInfoForm;

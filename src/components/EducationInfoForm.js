import React, { Component } from "react";
import PropTypes from "prop-types";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class EducationInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.removeForm = this.removeForm.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.isPresentHandler = this.isPresentHandler.bind(this);
  }

  removeForm(event) {
    const { dataHandler } = this.props;
    const id = event.target.parentNode.getAttribute("data-id");
    const { data } = this.state;
    const newData = data.filter((el) => el.id !== Number(id));

    dataHandler("education", newData);
    this.setState({
      data: newData,
    });
  }

  incrementQuantity() {
    const { data } = this.state;

    this.setState({
      data: data.concat({ id: uniqueId() }),
    });
  }

  inputHandler(event) {
    const { dataHandler } = this.props;
    const id = Number(event.target.closest("form").getAttribute("data-id"));
    const { data } = this.state;
    let newData = [];

    if (event.target.id === "education-title") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationTitle = event.target.value;
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
    this.setState({
      data: newData,
    });
  }

  isPresentHandler(event) {
    if (event.target.id !== "is-present") return;
    const { checked } = event.target;
    const form = event.target.closest("form");
    // const id = Number(form.getAttribute("data-id"))
    const endDateInput = form.querySelector("#education-end-date");
    if (!checked) {
      endDateInput.removeAttribute("disabled");
    } else {
      endDateInput.setAttribute("disabled", "true");
    }
  }

  render() {
    const { data } = this.state;

    const form = (id) => (
      <form data-id={id}>
        <label htmlFor="education-title">
          Title:
          <input type="text" id="education-title" onChange={this.inputHandler} />
        </label>
        <label htmlFor="education-institute">
          Institute:
          <input type="text" id="education-institute" onChange={this.inputHandler} />
        </label>
        <label htmlFor="education-start-date">
          From:
          <input type="date" id="education-start-date" onChange={this.inputHandler} />
        </label>
        <label htmlFor="education-end-date">
          To:
          <input type="date" id="education-end-date" onChange={this.inputHandler} />
        </label>
        <label htmlFor="is-present">
          Present
          <input type="checkbox" id="is-present" onChange={this.isPresentHandler} />
        </label>
        <button type="button" onClick={this.removeForm}>Delete</button>
      </form>
    );

    return (
      <div>
        <h2>Education</h2>
        <button type="button" onClick={this.incrementQuantity}>Add Education</button>
        {data.map((el) => <div key={el.id}>{form(el.id)}</div>)}
      </div>
    );
  }
}

EducationInfoForm.propTypes = {
  dataHandler: PropTypes.func,
};

EducationInfoForm.defaultProps = {
  dataHandler: () => {},
};

export default EducationInfoForm;

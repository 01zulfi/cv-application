import React, { Component } from "react";
import PropTypes from "prop-types";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class EducationInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: [],
    };

    this.removeForm = this.removeForm.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  removeForm(event) {
    const { dataHandler } = this.props;
    const id = event.target.parentNode.getAttribute("data-id");
    const { keys } = this.state;
    const newKeys = keys.filter((el) => el.id !== Number(id));

    dataHandler("education", newKeys);
    this.setState({
      keys: newKeys,
    });
  }

  incrementQuantity() {
    const { keys } = this.state;

    this.setState({
      keys: keys.concat({ id: uniqueId() }),
    });
  }

  inputHandler(event) {
    const { dataHandler } = this.props;
    const id = Number(event.target.closest("form").getAttribute("data-id"));
    const { keys } = this.state;
    let newKeys = [];

    if (event.target.id === "education-title") {
      newKeys = keys.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationTitle = event.target.value;
        }
        return newObj;
      });
    }
    if (event.target.id === "education-institute") {
      newKeys = keys.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationInstitute = event.target.value;
        }
        return newObj;
      });
    }
    if (event.target.id === "education-start-date") {
      newKeys = keys.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationStartDate = event.target.value;
        }
        return newObj;
      });
    }
    if (event.target.id === "education-end-date") {
      newKeys = keys.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.educationEndDate = event.target.value;
        }
        return newObj;
      });
    }

    dataHandler("education", newKeys);
    this.setState({
      keys: newKeys,
    });
  }

  render() {
    const { keys } = this.state;

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
        <button type="button" onClick={this.removeForm}>Delete</button>
      </form>
    );

    return (
      <div>
        <h2>Education</h2>
        <button type="button" onClick={this.incrementQuantity}>Add Education</button>
        {keys.map((el) => <div key={el.id}>{form(el.id)}</div>)}
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

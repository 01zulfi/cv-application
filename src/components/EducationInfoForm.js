import React, { Component } from "react";
// import PropTypes from "prop-types";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class EducationInfoForm extends Component {
  constructor(props) {
    super(props);

    //  this.educationInfoData = [];

    this.state = {
      keys: [],
    };

    this.removeForm = this.removeForm.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  removeForm(event) {
    const id = event.target.parentNode.getAttribute("data-id");
    const { keys } = this.state;
    const newKeys = keys.filter((el) => el.id !== Number(id));

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

  render() {
    const { keys } = this.state;

    const form = (id) => (
      <form data-id={id}>
        <label htmlFor="education-title">
          Title:
          <input type="text" id="education-title" />
        </label>
        <label htmlFor="education-institute">
          Institute:
          <input type="text" id="education-institute" />
        </label>
        <label htmlFor="education-start-date">
          From:
          <input type="date" id="education-start-date" />
        </label>
        <label htmlFor="education-end-date">
          To:
          <input type="date" id="education-end-date" />
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
};

EducationInfoForm.defaultProps = {
};

export default EducationInfoForm;

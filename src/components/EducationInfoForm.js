import React, { Component } from "react";
// import PropTypes from "prop-types";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class EducationInfoForm extends Component {
  static removeForm(event) {
    event.target.parentNode.remove();
  }

  constructor(props) {
    super(props);

    this.state = {
      // data: [],
      keys: [],
    };

    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  incrementQuantity() {
    const { keys } = this.state;
    this.setState({
      keys: keys.concat({ id: uniqueId() }),
    });
  }

  render() {
    const { keys } = this.state;

    const form = (
      <form>
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
        <button type="button" onClick={EducationInfoForm.removeForm}>Delete</button>
      </form>
    );

    return (
      <div>
        <h2>Education</h2>
        <button type="button" onClick={this.incrementQuantity}>Add Education</button>
        {keys.map((el) => <div key={el.id}>{form}</div>)}
      </div>
    );
  }
}

EducationInfoForm.propTypes = {
};

EducationInfoForm.defaultProps = {
};

export default EducationInfoForm;

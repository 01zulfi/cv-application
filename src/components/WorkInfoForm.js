import React, { Component } from "react";
// import PropTypes from "prop-types";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class WorkInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.removeForm = this.removeForm.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  removeForm(event) {
    const id = event.target.parentNode.getAttribute("data-id");
    const { data } = this.state;
    const newData = data.filter((el) => el.id !== Number(id));

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

  render() {
    const { data } = this.state;

    const form = (id) => (
      <form data-id={id}>
        <label htmlFor="work-title">
          Title:
          <input type="text" id="work-title" />
        </label>
        <label htmlFor="work-company">
          Company:
          <input type="text" id="work-company" />
        </label>
        <label htmlFor="work-start-date">
          From:
          <input type="date" id="work-start-date" />
        </label>
        <label htmlFor="work-end-date">
          To:
          <input type="date" id="work-end-date" />
        </label>
        <button type="button" onClick={this.removeForm}>Delete</button>
      </form>
    );

    return (
      <div className="work-info-form">
        <h2>Work </h2>
        <button type="submit" onClick={this.incrementQuantity}>Add Work</button>
        {data.map((el) => <div key={el.id}>{form(el.id)}</div>)}
      </div>
    );
  }
}

WorkInfoForm.propTypes = {
};

WorkInfoForm.defaultProps = {
};

export default WorkInfoForm;

import React, { Component } from "react";
// import PropTypes from "prop-types";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class WorkInfoForm extends Component {
  static removeForm(event) {
    event.target.parentNode.remove();
  }

  constructor(props) {
    super(props);

    this.state = {
      //    data: [],
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
        <button type="button" onClick={WorkInfoForm.removeForm}>Delete</button>
      </form>
    );

    return (
      <div className="work-info-form">
        <h2>Work </h2>
        <button type="submit" onClick={this.incrementQuantity}>Add Work</button>
        {keys.map((el) => <div key={el.id}>{form}</div>)}
      </div>
    );
  }
}

WorkInfoForm.propTypes = {
};

WorkInfoForm.defaultProps = {
};

export default WorkInfoForm;

import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/WorkInfoForm.css";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class WorkInfoForm extends Component {
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

    dataHandler("work", newData);
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

    dataHandler("work", newData);
    this.setState({
      data: newData,
    });
  }

  isPresentHandler(event) {
    if (event.target.id !== "is-present") return;

    const { checked } = event.target;
    const form = event.target.closest("form");
    const id = Number(form.getAttribute("data-id"));
    const { data } = this.state;
    let newData = [];
    const { dataHandler } = this.props;
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
    this.setState({
      data: newData,
    });
  }

  render() {
    const { data } = this.state;

    const form = (id) => (
      <form data-id={id}>
        Title:
        <input type="text" id="work-title" onChange={this.inputHandler} />
        Company:
        <input type="text" id="work-company" onChange={this.inputHandler} />
        From:
        <input type="date" id="work-start-date" onChange={this.inputHandler} />
        To:
        <input type="date" id="work-end-date" onChange={this.inputHandler} />
        <div className="is-present-checkbox">
          Present
          <input type="checkbox" id="is-present" onChange={this.isPresentHandler} />
        </div>
        <button type="button" onClick={this.removeForm}>Delete</button>
      </form>
    );

    return (
      <div className="work-info-form-div">
        <h2>Work </h2>
        <button type="submit" onClick={this.incrementQuantity}>Add Work</button>
        {data.map((el) => <div key={el.id}>{form(el.id)}</div>)}
      </div>
    );
  }
}

WorkInfoForm.propTypes = {
  dataHandler: PropTypes.func,
};

WorkInfoForm.defaultProps = {
  dataHandler: () => {},
};

export default WorkInfoForm;

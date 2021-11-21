import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/SkillsInfoForm.css";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class SkillsInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.removeForm = this.removeForm.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  removeForm(event) {
    const { dataHandler } = this.props;
    const id = event.target.parentNode.getAttribute("data-id");
    const { data } = this.state;
    const newData = data.filter((el) => el.id !== Number(id));

    dataHandler("skills", newData);
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

    if (event.target.id === "skills-input") {
      newData = data.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.skill = event.target.value;
        }
        return newObj;
      });
    }

    dataHandler("skills", newData);
    this.setState({
      data: newData,
    });
  }

  render() {
    const { data } = this.state;

    const form = (id) => (
      <form key={id} data-id={id}>
        <input type="text" id="skills-input" onChange={this.inputHandler} />
        <button type="button" onClick={this.removeForm}>Delete</button>
      </form>
    );

    return (
      <div className="skills-info-form-div">
        <h2>Skills</h2>
        <button type="button" onClick={this.incrementQuantity}>Add Skill</button>
        {data.map((el) => form(el.id))}
      </div>
    );
  }
}

SkillsInfoForm.propTypes = {
  dataHandler: PropTypes.func,
};

SkillsInfoForm.defaultProps = {
  dataHandler: () => {},
};
export default SkillsInfoForm;

import React, { Component } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkInfoForm from "./WorkInfoForm";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class CVInput extends Component {
  constructor() {
    super();

    this.state = {
      quantity: [{ id: uniqueId() }],
    };

    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  incrementQuantity() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity.concat({ id: uniqueId() }),
    });
  }

  render() {
    const { quantity } = this.state;

    return (
      <div className="CVInput">
        <GeneralInfoForm />
        <EducationInfoForm quantity={quantity} />
        <button className="add-education-button" type="button" onClick={this.incrementQuantity}>
          Add Education
        </button>
        <WorkInfoForm />
      </div>
    );
  }
}

export default CVInput;

import React, { Component } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkInfoForm from "./WorkInfoForm";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class CVInput extends Component {
  constructor() {
    super();

    this.state = {
      educationQuantity: [],
      workQuantity: [],
    };

    this.incrementEducationQuantity = this.incrementEducationQuantity.bind(this);
    this.incrementWorkQuantity = this.incrementWorkQuantity.bind(this);
  }

  incrementEducationQuantity() {
    const { educationQuantity } = this.state;
    this.setState({
      educationQuantity: educationQuantity.concat({ id: uniqueId() }),
    });
  }

  incrementWorkQuantity() {
    const { workQuantity } = this.state;
    this.setState({
      workQuantity: workQuantity.concat({ id: uniqueId() }),
    });
  }

  render() {
    const { educationQuantity, workQuantity } = this.state;

    return (
      <div className="CVInput">
        <GeneralInfoForm />
        <EducationInfoForm quantity={educationQuantity} />
        <button
          className="add-education-button"
          type="button"
          onClick={this.incrementEducationQuantity}
        >
          Add Education
        </button>
        <WorkInfoForm quantity={workQuantity} />
        <button
          className="add-work-button"
          type="button"
          onClick={this.incrementWorkQuantity}
        >
          Add Work
        </button>
      </div>
    );
  }
}

export default CVInput;

import React, { Component } from "react";
import PropTypes from "prop-types";
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
    const { style } = this.props;

    return (
      <div className="CVInput" style={style}>
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

CVInput.propTypes = {
  style: PropTypes.object,
};

CVInput.defaultProps = {
  style: {},
};

export default CVInput;

import React, { Component } from "react";
import PropTypes from "prop-types";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkInfoForm from "./WorkInfoForm";

const uniqueId = () => Math.floor(Math.random() * Date.now());

class CVInput extends Component {
  constructor(props) {
    super(props);

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
    const { style, dataHandler } = this.props;

    return (
      <div className="CVInput" style={style}>
        <GeneralInfoForm dataHandler={dataHandler} />
        <EducationInfoForm dataHandler={dataHandler} quantity={educationQuantity} />
        <button
          className="add-education-button"
          type="button"
          onClick={this.incrementEducationQuantity}
        >
          Add Education
        </button>
        <WorkInfoForm dataHandler={dataHandler} quantity={workQuantity} />
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
  dataHandler: PropTypes.func,
};

CVInput.defaultProps = {
  style: {},
  dataHandler: () => {},
};

export default CVInput;

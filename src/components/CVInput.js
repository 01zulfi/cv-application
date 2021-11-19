import React, { Component } from "react";
import PropTypes from "prop-types";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkInfoForm from "./WorkInfoForm";

class CVInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { style, dataHandler } = this.props;

    return (
      <div className="CVInput" style={style}>
        <GeneralInfoForm dataHandler={dataHandler} />
        <EducationInfoForm dataHandler={dataHandler} />
        <WorkInfoForm dataHandler={dataHandler} />
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

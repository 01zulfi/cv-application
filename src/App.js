import React, { Component } from "react";
import CVInput from "./components/CVInput";
import CVDisplay from "./components/CVDisplay";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CVInputStyle: { display: "block" },
      CVDisplayStyle: { display: "none" },
      CVData: { general: {}, education: [], work: [] },
    };

    this.editButtonEventHandler = this.editButtonEventHandler.bind(this);
    this.previewButtonEventHandler = this.previewButtonEventHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  editButtonEventHandler() {
    this.setState({
      CVInputStyle: { display: "block" },
      CVDisplayStyle: { display: "none" },
    });
  }

  previewButtonEventHandler() {
    this.setState({
      CVInputStyle: { display: "none" },
      CVDisplayStyle: { display: "block" },
    });
  }

  inputChangeHandler(event) {
    const { CVData } = this.state;
    let { general, education, work } = CVData;

    if (event.target.id === "first-name-input") {
      general = Object.assign(general, { firstName: event.target.value });
    }
    if (event.target.id === "last-name-input") {
      general = Object.assign(general, { lastName: event.target.value });
    }
    if (event.target.id === "email-input") {
      general = Object.assign(general, { email: event.target.value });
    }
    if (event.target.id === "phone-number-input") {
      general = Object.assign(general, { phone: event.target.value });
    }

    education = []; work = [];

    this.setState({
      CVData: {
        general,
        education,
        work,
      },
    });
  }

  render() {
    const { CVInputStyle, CVDisplayStyle, CVData } = this.state;

    return (
      <div>
        <h1>CV Application</h1>
        <button
          type="button"
          className="edit"
          onClick={this.editButtonEventHandler}
        >
          Edit
        </button>
        <button
          type="button"
          className="preview"
          onClick={this.previewButtonEventHandler}
        >
          Preview
        </button>
        <CVInput dataHandler={this.inputChangeHandler} style={CVInputStyle} />
        <CVDisplay style={CVDisplayStyle} CVData={CVData} />
      </div>
    );
  }
}

export default App;

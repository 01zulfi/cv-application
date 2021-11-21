import React, { Component } from "react";
import CVInput from "./components/CVInput";
import CVDisplay from "./components/CVDisplay";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CVInputStyle: { display: "flex" },
      CVDisplayStyle: { display: "none" },
      CVData: {
        general: {}, education: [], work: [], skills: [],
      },
    };

    this.editButtonEventHandler = this.editButtonEventHandler.bind(this);
    this.previewButtonEventHandler = this.previewButtonEventHandler.bind(this);
    this.dataHandler = this.dataHandler.bind(this);
  }

  editButtonEventHandler() {
    this.setState({
      CVInputStyle: { display: "flex" },
      CVDisplayStyle: { display: "none" },
    });
  }

  previewButtonEventHandler() {
    this.setState({
      CVInputStyle: { display: "none" },
      CVDisplayStyle: { display: "flex" },
    });
  }

  dataHandler(section, data) {
    const { CVData } = this.state;
    let {
      general, education, work, skills,
    } = CVData;

    if (section === "general") {
      general = data;
    }
    if (section === "education") {
      education = data;
    }
    if (section === "work") {
      work = data;
    }
    if (section === "skills") {
      skills = data;
    }

    this.setState({
      CVData: {
        general, education, work, skills,
      },
    });
  }

  render() {
    const { CVInputStyle, CVDisplayStyle, CVData } = this.state;

    return (
      <div className="App">
        <h1>CV Application</h1>
        <div className="buttons">
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
        </div>
        <CVInput dataHandler={this.dataHandler} style={CVInputStyle} />
        <CVDisplay style={CVDisplayStyle} CVData={CVData} />
      </div>
    );
  }
}

export default App;

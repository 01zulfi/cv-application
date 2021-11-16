import React, { Component } from "react";
import CVInput from "./components/CVInput";
import CVDisplay from "./components/CVDisplay";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CVInputStyle: { display: "block" },
      CVDisplayStyle: { display: "none" },
    };

    this.editButtonEventHandler = this.editButtonEventHandler.bind(this);
    this.previewButtonEventHandler = this.previewButtonEventHandler.bind(this);
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

  render() {
    const { CVInputStyle, CVDisplayStyle } = this.state;

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
        <CVInput style={CVInputStyle} />
        <CVDisplay style={CVDisplayStyle} />
      </div>
    );
  }
}

export default App;

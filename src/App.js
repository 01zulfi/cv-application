import React, { Component } from "react";
import CVInput from "./components/CVInput";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CVInputStyle: { display: "block" },
    };

    this.editButtonEventHandler = this.editButtonEventHandler.bind(this);
    this.previewButtonEventHandler = this.previewButtonEventHandler.bind(this);
  }

  editButtonEventHandler() {
    this.setState({
      CVInputStyle: { display: "block" },
    });
  }

  previewButtonEventHandler() {
    this.setState({
      CVInputStyle: { display: "none" },
    });
  }

  render() {
    const { CVInputStyle } = this.state;

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
      </div>
    );
  }
}

export default App;

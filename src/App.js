import React, { Component } from "react";
import CVInput from "./components/CVInput";

class App extends Component {
  render() {
    return (
      <div>
        <h1>CV Application</h1>
        <button type="button" className="edit">Edit</button>
        <button type="button" className="preview">Preview</button>
        <CVInput />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";

class App extends Component {
  render() {
    return (
      <div>
        <h1>CV Application</h1>
        <GeneralInfoForm />
      </div>
    );
  }
}

export default App;

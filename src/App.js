import React, { useState } from "react";
import CVInput from "./components/CVInput";
import CVDisplay from "./components/CVDisplay";
import "./styles/App.css";

const App = function () {
  const [CVInputStyle, setCVInputStyle] = useState({ display: "flex" });
  const [CVDisplayStyle, setCVDisplayStyle] = useState({ display: "none" });
  const [CVData, setCVData] = useState(
    {
      general: {}, education: [], work: [], skills: [],
    },
  );

  const editButtonEventHandler = () => {
    setCVInputStyle({ display: "flex" });
    setCVDisplayStyle({ display: "none" });
  };

  const previewButtonEventHandler = () => {
    setCVInputStyle({ display: "none" });
    setCVDisplayStyle({ display: "flex" });
  };

  const dataHandler = (section, data) => {
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

    setCVData({
      general, education, work, skills,
    });
  };

  return (
    <div className="App">
      <h1>CV Application</h1>
      <div className="buttons">
        <button
          type="button"
          className="edit"
          onClick={editButtonEventHandler}
        >
          Edit
        </button>
        <button
          type="button"
          className="preview"
          onClick={previewButtonEventHandler}
        >
          Preview
        </button>
      </div>
      <CVInput dataHandler={dataHandler} style={CVInputStyle} />
      <CVDisplay style={CVDisplayStyle} CVData={CVData} />
    </div>
  );
};

export default App;

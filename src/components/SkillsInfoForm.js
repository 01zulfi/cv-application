import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/SkillsInfoForm.css";

const uniqueId = () => Math.floor(Math.random() * Date.now());

const SkillsInfoForm = function ({ dataHandler }) {
  const [skills, setSkills] = useState([]);

  const removeForm = (event) => {
    const id = event.target.parentNode.getAttribute("data-id");
    const newSkills = skills.filter((el) => el.id !== Number(id));
    setSkills(newSkills);
  };

  const incrementQuantity = () => {
    setSkills(skills.concat({ id: uniqueId() }));
  };

  const inputHandler = (event) => {
    const id = Number(event.target.closest("form").getAttribute("data-id"));
    let newSkills = [];

    if (event.target.id === "skills-input") {
      newSkills = skills.map((el) => {
        const newObj = { ...el };
        if (newObj.id === id) {
          newObj.skill = event.target.value;
        }
        return newObj;
      });
    }

    setSkills(newSkills);
  };

  useEffect(() => {
    dataHandler("skills", skills);
  }, [skills]);

  const form = (id) => (
    <form key={id} data-id={id}>
      <input type="text" id="skills-input" onChange={inputHandler} />
      <button type="button" onClick={removeForm}>Delete</button>
    </form>
  );

  return (
    <div className="skills-info-form-div">
      <h2>Skills</h2>
      <button type="button" onClick={incrementQuantity}>Add Skill</button>
      {skills.map((el) => form(el.id))}
    </div>
  );
};

SkillsInfoForm.propTypes = {
  dataHandler: PropTypes.func,
};

SkillsInfoForm.defaultProps = {
  dataHandler: () => {},
};

export default SkillsInfoForm;

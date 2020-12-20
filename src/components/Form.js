import React, { useState } from "react";

function Form(props) {
  const [note, setNote] = useState({
    title: "",
    note: "",
    list: "",
    date: "",
    project: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setNote({ [name]: value });
    console.log(name, value);
  };

  const handleSubmit = () => {
    if (note.note !== "") {
      props.handleForm(note);
      setNote({
        title: "",
        note: "",
        list: "",
        date: "",
        project: "",
      });
    }
  };

  return (
    <div className="form">
      <input
        className="input-field"
        id="title-input"
        placeholder="Title"
        name="title"
        aria-label="title-input"
        onChange={(e) => handleChange(e)}
      ></input>
      <textarea
        className="input-field"
        id="note-input"
        placeholder="take a note..."
        name="note"
        aria-label="note-input"
        onChange={(e) => handleChange}
      ></textarea>
      <div id="form-bottom-input">
        <input
          type="date"
          className="input-field"
          id="due-date-input"
          aria-label="date-input"
          name="date"
          onChange={(e) => handleChange}
        ></input>{" "}
        <input
          className="input-field"
          id="project-input"
          placeholder="project"
          aria-label="project-input"
          name="project"
          onChange={(e) => handleChange}
        ></input>{" "}
        <button aria-label="add-button" id="add-button" onClick={handleSubmit}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Form;

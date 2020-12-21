import React, { useState } from "react";
import ListInput from "./ListInput";

function Form(props) {
  const [display, setDisplay] = useState(props.display);
  const [note, setNote] = useState({
    id: "",
    title: "",
    note: "",
    list: [],
    date: "",
    project: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setNote({ ...note, [name]: value });
  };

  const handleListInput = (value) => {
    setNote((values) => ({
      ...values,
      list: [...values.list, { value, completed: false }],
    }));
  };

  const resetForm = () => {
    setNote({
      id: "",
      title: "",
      note: "",
      list: [],
      date: "",
      project: "",
    });
  };

  const handleSubmit = () => {
    setDisplay(false);
    if (note.note !== "" || note.list.length !== 0) {
      props.handleForm(note);
    }
    resetForm();
  };

  return (
    <div className="form">
      {display ? (
        <input
          className="input-field"
          id="title-input"
          placeholder="Title"
          name="title"
          value={note.title}
          aria-label="title-input"
          onChange={(e) => handleChange(e)}
        ></input>
      ) : null}

      <textarea
        className="input-field"
        id="note-input"
        placeholder="take a note..."
        name="note"
        value={note.note}
        aria-label="note-input"
        onClick={() => setDisplay(true)}
        onChange={(e) => handleChange(e)}
      ></textarea>

      {display ? <ListInput handleListInput={handleListInput} /> : null}

      {note.list.map((item, index) => (
        <li className="temporary-form-list-item" key={index}>
          {item}
        </li>
      ))}

      {display ? (
        <div id="form-bottom-input">
          <input
            type="date"
            className="input-field"
            id="due-date-input"
            aria-label="date-input"
            value={note.date}
            name="date"
            onChange={(e) => handleChange(e)}
          ></input>{" "}
          <input
            className="input-field"
            id="project-input"
            placeholder="project"
            aria-label="project-input"
            value={note.project}
            name="project"
            onChange={(e) => handleChange(e)}
          ></input>{" "}
          <button
            aria-label="add-button"
            id="add-button"
            onClick={handleSubmit}
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Form;

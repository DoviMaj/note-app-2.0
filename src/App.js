import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form.js";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([
    { title: "dvs", note: "hi", project: "slsl", date: "sdvsdv" },
    { title: "dvs", note: "hi", project: "slsl", date: "sdvsdv" },
  ]);
  const handleForm = (note) => {
    setNotes([...notes, note]);
  };
  return (
    <div className="App">
      <Form handleForm={(note) => handleForm(note)} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </div>
    </div>
  );
}

export default App;

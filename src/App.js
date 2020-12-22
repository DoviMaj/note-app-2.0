import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form.js";
import Note from "./components/Note";
import { randomNum } from "./utils";

function App(props) {
  const [notes, setNotes] = useState(props.sample);

  const handleForm = (note) => {
    setNotes([note, ...notes]);
  };

  const addListItem = (value, id) => {
    // let newNotes = [...notes];
    // newNotes.map((note) => {
    //   if (id === note.id) {
    //     note.list = [...note.list, value];
    //   }
    // });
    // setNotes(newNotes);

    setNotes(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              list: [
                ...note.list,
                { name: value, completed: false, id: randomNum() },
              ],
            }
          : note
      )
    );
  };

  const changeChecked = (id, taskId) => {
    let newNotes = [...notes];
    newNotes.map((note) =>
      id === note.id
        ? note.list.map((listItem) =>
            listItem.id === taskId
              ? (listItem.completed = !listItem.completed)
              : listItem.completed
          )
        : note
    );
    setNotes(newNotes);
  };

  const changeNoteField = (newValue, field, id) => {
    let newNotes = [...notes];
    newNotes.map((note) => (id === note.id ? (note[field] = newValue) : note));
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <Form display={false} handleForm={(note) => handleForm(note)} />
      <div className="notes-container">
        {notes.map((note) => (
          <Note
            changeNoteField={changeNoteField}
            changeChecked={changeChecked}
            addListItem={addListItem}
            key={note.id}
            note={note}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

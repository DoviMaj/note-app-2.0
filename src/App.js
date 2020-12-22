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

  const changeListItem = (e, id, listItemId) => {
    const field = e.target.name;
    const value = e.target.value;
    let newNotes = [...notes];
    notes.map((note) => {
      if (id === note.id) {
        note.list.map((listItem) => {
          if (listItem.id === listItemId) {
            if (field === "checkbox") {
              listItem.completed = !listItem.completed;
            } else {
              listItem.name = value;
            }
          }
          return listItem;
        });
      }
      return note;
    });
    setNotes(newNotes);
  };

  const deleteListItem = (id, listItemId) => {
    let newNotes = [...notes];
    newNotes.map((note) => {
      if (id === note.id) {
        console.log(id, listItemId);
        note.list = note.list.filter((item) => item.id !== listItemId);
      }
      return note;
    });
    setNotes(newNotes);
  };

  const changeNoteField = (newValue, field, id) => {
    let newNotes = [...notes];
    newNotes.map((note) => (id === note.id ? (note[field] = newValue) : note));
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    let newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <Form display={false} handleForm={(note) => handleForm(note)} />
      <div className="notes-container">
        {notes.map((note) => (
          <Note
            deleteListItem={deleteListItem}
            deleteNote={deleteNote}
            edit={false}
            changeNoteField={changeNoteField}
            addListItem={addListItem}
            changeListItem={changeListItem}
            key={note.id}
            note={note}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

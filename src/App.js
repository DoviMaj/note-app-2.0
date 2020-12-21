import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form.js";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([
    {
      id: "sample1",
      title: "dvs",
      note: "hi",
      list: [
        { name: "sd", completed: true, id: "task0" },
        { name: "sd", completed: false, id: "task1" },
      ],
      project: "slsl",
      date: "sdvsdv",
    },
    {
      id: "sample2",
      title: "dvs",
      note: "hi",
      list: [
        { name: "sd", completed: false, id: "task1.0" },
        { name: "sd", completed: false, id: "task1.1" },
      ],
      project: "slsl",
      date: "sdvsdv",
    },
  ]);

  const handleForm = (note) => {
    setNotes([note, ...notes]);
  };

  const addListItem = (value, id) => {
    // let newNotes = [...notes];
    // newNotes.map((note, index) => {
    //   if (id === note.id) {
    //     newNotes[index].list = [...newNotes[index].list, value];
    //   }
    // });
    // setNotes(newNotes);

    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, list: [...note.list, value] } : note
      )
    );
  };

  const changeChecked = (value, id, taskId) => {
    let newNotes = [...notes];
    newNotes.map((note, index) => {
      if (id === note.id) {
        newNotes[index].list.map((listItem) =>
          listItem.id === taskId
            ? (listItem.completed = !value)
            : listItem.completed
        );
      }
    });
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <Form display={false} handleForm={(note) => handleForm(note)} />
      <div className="notes-container">
        {notes.map((note) => (
          <Note
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

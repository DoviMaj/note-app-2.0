import "./assets/stylesheets/App.css";
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Note from "./components/Note";
import uniqid from "uniqid";
import firebase, { auth } from "./firebase.js";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import { useAuthState } from "react-firebase-hooks/auth";

const db = firebase.firestore();
const firestore = firebase.firestore();

function App(props) {
  const [user, loading] = useAuthState(auth);
  const [notes, setNotes] = useState(props.sample);
  const usersRef = firestore.collection("users");

  useEffect(() => {
    if (user !== null) {
      if (usersRef.doc(user.uid) === null) {
        usersRef.doc(user.uid).set({ notes: notes });
      } else {
        var docRef = db.collection("users").doc(user.uid);
        docRef
          .get()
          .then(function (doc) {
            if (doc.exists) {
              const result = doc.data();
              setNotes(result.notes);
            } else {
              console.log("No such document!");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      }
    }
  }, [user]);

  useEffect(() => {
    if (user !== null) {
      usersRef.doc(user.uid).set({ notes: notes });
    }
  }, [notes]);

  const handleForm = async (note) => {
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
                { name: value, completed: false, id: uniqid() },
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

  const clearNotes = () => {
    setNotes([]);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="login">
          {user !== null ? (
            <div className="sign-in">
              <img
                className="user-img"
                alt="user-img"
                src={auth.currentUser.photoURL}
              ></img>
              <SignOut />
            </div>
          ) : (
            <SignIn />
          )}
        </div>
        <Form display={false} handleForm={(note) => handleForm(note)} />

        <span
          className={`clear-all-button ${notes.length === 0 && "hide"}`}
          onClick={clearNotes}
        >
          Clear Notes
        </span>
      </div>

      {loading ? (
        <div className="loading">
          <p style={{ fontSize: "1.5rem" }}>loading...</p>
        </div>
      ) : (
        <div className="notes-container">
          {notes.length !== 0 &&
            notes.map((note) => (
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
      )}
    </div>
  );
}

export default App;

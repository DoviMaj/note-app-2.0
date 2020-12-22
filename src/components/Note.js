import { useState } from "react";
import ListInput from "./ListInput";
import ListItem from "./ListItem";

function Note(props) {
  const { id, title, note, list, project, date } = props.note;
  const [titleEdit, setTitleEdit] = useState(props.edit);
  const [noteEdit, setNoteEdit] = useState(props.edit);
  const [mouseHover, setMouseHover] = useState(false);

  const submitChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    props.changeNoteField(value, field, id);
  };

  const toggleMouseHover = () => {
    setMouseHover(!mouseHover);
  };

  return (
    <div
      className="note-wrapper"
      onMouseEnter={toggleMouseHover}
      onMouseLeave={toggleMouseHover}
    >
      {mouseHover ? (
        <button className="delete-button" onClick={() => props.deleteNote(id)}>
          x
        </button>
      ) : null}

      <div>
        {titleEdit ? (
          <input
            autoFocus
            name="title"
            onChange={(e) => submitChange(e)}
            onBlur={() => setTitleEdit(!titleEdit)}
            onKeyUp={(e) =>
              e.key === "Enter" ? setTitleEdit(!titleEdit) : null
            }
            value={title}
            spellCheck="false"
            className="change-input title-edit"
          ></input>
        ) : (
          <h2
            onClick={() => setTitleEdit(!titleEdit)}
            className="note-title"
            data-testid="title"
          >
            {title}
          </h2>
        )}
      </div>

      {noteEdit ? (
        <textarea
          autoFocus
          // sets autoFocus to end of text
          onFocus={function (e) {
            var val = e.target.value;
            e.target.value = "";
            e.target.value = val;
          }}
          name="note"
          value={note}
          onChange={(e) => submitChange(e)}
          onBlur={() => setNoteEdit(!noteEdit)}
          className="change-input note-input"
          spellCheck="false"
        />
      ) : (
        <div className="">
          <p
            className="note-text"
            data-testid="note"
            onClick={() => setNoteEdit(!noteEdit)}
          >
            {note}
          </p>
        </div>
      )}

      {list !== undefined &&
        list.map((item, index) => (
          <ListItem
            deleteListItem={() => props.deleteListItem(id, item.id)}
            edit={false}
            id={item.id}
            changeListItem={(e) => props.changeListItem(e, id, item.id)}
            completed={item.completed}
            key={`${index}`}
            item={item.name}
          />
        ))}

      <ListInput handleListInput={(value) => props.addListItem(value, id)} />

      <div className="due-date-div">
        <p className="project" data-testid="project">
          {project}
        </p>
        <p className="project" data-testid="date" id="due-date">
          {date}
        </p>
      </div>
    </div>
  );
}

export default Note;

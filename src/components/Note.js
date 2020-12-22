import { useState } from "react";
import ListInput from "./ListInput";
import ListItem from "./ListItem";

function Note(props) {
  const { id, title, note, list, project, date } = props.note;
  const [titleEdit, setTitleEdit] = useState(false);

  const submitChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    props.changeNoteField(value, field, id);
  };

  return (
    <div className="note-wrapper">
      <button className="delete-button">x</button>
      <div>
        {titleEdit ? (
          <input
            name="title"
            onChange={(e) => submitChange(e)}
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
      <div className="">
        <p className="note-text" data-testid="note">
          {note}
        </p>
        <textarea
          className="change-input hide note-input"
          spellCheck="false"
        ></textarea>
      </div>
      {list !== undefined &&
        list.map((item, index) => (
          <ListItem
            id={item.id}
            changeChecked={() => props.changeChecked(id, item.id)}
            completed={item.completed}
            key={`${item}${index}`}
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

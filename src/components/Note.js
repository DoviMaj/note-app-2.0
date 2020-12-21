import ListInput from "./ListInput";
import ListItem from "./ListItem";

function Note(props) {
  const { id, title, note, list, project, date } = props.note;

  return (
    <div className="note-wrapper">
      <button className="delete-button">x</button>
      <div>
        <h2 className="note-title" data-testid="title">
          {title}
        </h2>
        <input
          spellCheck="false"
          className="change-input title-edit hide"
        ></input>
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
            changeChecked={(value) => props.changeChecked(value, id, item.id)}
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

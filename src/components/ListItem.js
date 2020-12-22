function ListItem(props) {
  return (
    <div>
      <div className="list-item">
        <input
          name="checkbox"
          onChange={(e) => props.changeListItem(e)}
          checked={props.completed}
          className="checkbox"
          type="checkbox"
        ></input>

        <li
          className={`list-item-text ${
            props.completed ? "checked" : undefined
          }`}
        >
          {props.item}
        </li>
        <input spellCheck="false" className="change-input hide"></input>

        <button className="delete-checklist-button hide">x</button>
      </div>
    </div>
  );
}

export default ListItem;

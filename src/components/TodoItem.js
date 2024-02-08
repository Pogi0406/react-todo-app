import { useState } from "react";

export default function TodoItem({ items, dispatch }) {
  return (
    <>
      {items.map((item) => (
        <SingleTodoItem key={item.id} item={item} dispatch={dispatch} />
      ))}
      <button
        className="btnClearAll"
        onClick={() => dispatch({ type: "REMOVE_ALL" })}
      >
        Clear all
      </button>
    </>
  );
}

function SingleTodoItem({ item, dispatch }) {
  const [editText, setEditText] = useState(item.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    dispatch({
      type: "EDIT_TODO",
      itemId: item.id,
      newText: editText,
    });
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => dispatch({ type: "MARK_AS_DONE", itemId: item.id })}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          className="item"
          style={{ textDecoration: item.done ? "line-through" : "none" }}
        >
          {item.text}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_TODO",
            itemId: item.id,
          })
        }
      >
        Delete
      </button>
    </li>
  );
}

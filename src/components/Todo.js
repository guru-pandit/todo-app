import React from "react";
import db from "./firebase";

function Todo({ todo }) {
  return (
    <>
      <li>
        {todo.todo}
        <span onClick={(e) => db.collection("todos").doc(todo.id).delete()}>
          <i className="far fa-trash-alt"></i>
        </span>
      </li>
    </>
  );
}

export default Todo;

import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";
import InputForm from "./InputForm";
import Heading from "./Heading";

function App() {
  // Declaring states for Todos & Input
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // When the app load fetch todos from the DB
  useEffect(() => {
    // this code fires when app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
          }))
        );
      });
  }, []);

  // Adding Todo
  const addTodo = (event) => {
    event.preventDefault();

    // adding new todo to DB
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="container">
      <div className="todo-app">
        <div className="todo-heading">
          <Heading text="Todo App" />
        </div>
        <div>
          <form>
            <InputForm input={input} addTodo={addTodo} setInput={setInput} />
          </form>
        </div>
        <div className="todo-list">
          <ul>
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;

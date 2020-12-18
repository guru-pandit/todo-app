import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState(["Vegitables", "Fruits"]);
  const [input, setInput] = useState("");

  // Adding Todo
  const addTodo = (event) => {
    // this will fire when click button
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <form>
        {/* <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /> */}
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
        {/* <button>Add Todo</button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

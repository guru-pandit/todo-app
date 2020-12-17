import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Vegitables", "Fruits"]);
  const [input, setInput] = useState("");

  // Adding Todo
  const addTodo = (event) => {
    // this will fire when click button
    console.log("Hi...");
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      {/* 49 */}
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={addTodo}>Add ToDo</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

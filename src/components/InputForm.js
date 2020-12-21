import React from "react";

function InputForm({ input, addTodo, setInput }) {
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span>Write your TODO</span>
        <button disabled={!input} type="submit" onClick={addTodo}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </>
  );
}

export default InputForm;

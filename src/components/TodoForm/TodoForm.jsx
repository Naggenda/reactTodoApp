/*jshint esversion: 6 */
import React from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input" placeholder="Enter Todo..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    );
  }
  export default TodoForm;
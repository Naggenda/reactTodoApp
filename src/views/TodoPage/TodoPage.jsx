/*jshint esversion: 6 */
import React from 'react';
import TodoForm from '../../components/TodoForm';
import Todo from '../../components/Todo';  
  
  
  function TodoPage() {
    const [todos, setTodos] = React.useState([]);
  
    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      <div>
        <div className="todo-list">
          <TodoForm addTodo={addTodo} />
          <div className="todos">
          <h2>My Todo Items.</h2>
          {todos.map((todo, index) => (       
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoPage;
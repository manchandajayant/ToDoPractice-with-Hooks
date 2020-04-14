import React, { useState } from "react";

function Todo({ todo, index }) {
  return <div>{todo.text}</div>;
}

function TodoForm({ addTodo }) {
  const [value, setvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setvalue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "learn",
      isCompleted: false,
    },
    { text: "play", isCompleted: false },
    { text: "buid apps", isCompleted: false },
  ]);

  const addTodo = (text) => {
    console.log("text");
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        {todos.map((todo, index) => {
          return <Todo key={index} index={index} todo={todo} />;
        })}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;

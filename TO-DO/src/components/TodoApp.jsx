import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
      completedAt: null,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed, completedAt: new Date() } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="bg-white p-10  rounded-lg shadow-2xl w-full max-w-2xl pt-10">
      <h1 className="text-4xl font-bold mb-5 text-center text-black font-serif">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default TodoApp;

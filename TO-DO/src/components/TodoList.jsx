import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

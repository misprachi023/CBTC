import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
      toast.success('Task added successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 mx-auto w-full max-w-md">
      <div className="flex">
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          className="border p-3 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out transform hover:scale-98" 
          placeholder="Add a new todo" 
        />
        <button 
          type="submit" 
          className="bg-red-500 text-white px-6 py-3 rounded-r-lg hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg font-semibold font-serif"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
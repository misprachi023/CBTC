import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck, FaUndo } from 'react-icons/fa';
import { toast } from 'react-toastify';

const TodoItem = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
    toast.success('Task updated successfully!');
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
    toast.error('Task deleted!');
  };

  const handleToggle = () => {
    toggleTodo(todo.id);
    toast.info(todo.completed ? 'Task marked as incomplete!' : 'Task completed!');
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', month: 'short', day: '2-digit', 
      hour: '2-digit', minute: '2-digit', second: '2-digit' 
    }).format(new Date(date));
  };

  return (
    <div className="bg-gray-100 p-7 mt-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="mb-3">
        {isEditing ? (
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 "
          />
        ) : (
          <div>
            <h3 className={`text-lg font-semibold font-serif ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {todo.text}
            </h3>
            <div className="text-sm text-gray-400 mt-1 font-custom">
              Created At: {formatDate(todo.createdAt)}
            </div>
            {todo.completed && (
              <div className="text-sm text-gray-400 font-custom" >
                Completed At: {formatDate(todo.completedAt)}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-between items-center">
        <button 
          onClick={handleToggle} 
          className={`p-2 rounded-full ${todo.completed ? 'bg-yellow-500' : 'bg-green-500'} text-white hover:bg-opacity-80 transition`}
        >
          {todo.completed ? <FaUndo size={9} /> : <FaCheck size={9} />}
        </button>
        {isEditing ? (
          <button 
            onClick={handleSave} 
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
          >
            Save
          </button>
        ) : (
          <button 
            onClick={handleEdit} 
            className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition"
          >
            <FaEdit size={9} />
          </button>
        )}
        <button 
          onClick={handleDelete} 
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
        >
          <FaTrash size={9} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

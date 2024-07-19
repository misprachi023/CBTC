import React, { useState } from "react";
import { ChromePicker } from "react-color"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoApp from "./components/TodoApp";

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handleColorChange = (color) => {
    setBgColor(color.hex);
  };
  const toggleColorPicker = () => {
    setShowColorPicker((prev) => !prev);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: bgColor }}
    >
      <TodoApp />
      <ToastContainer />
      <button
        onClick={toggleColorPicker}
        className="justify-center absolute  top-10 right-4 px-4 py-2 bg-gray-500 text-white rounded"
      >
        <i className="fas fa-palette"></i>
      </button>
      {showColorPicker && (
        <div className="absolute top-24 right-4">
          <ChromePicker color={bgColor} onChangeComplete={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default App;

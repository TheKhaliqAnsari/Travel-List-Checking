import React, { useState } from "react";
import "../index.css";

function Form() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <div>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={input}
          onChange={(e) => handleInput(e)}
        />
        <button>Add</button>
      </div>
    </div>
  );
}

export default Form;

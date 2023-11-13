import React, { useState } from "react";
import "../index.css";

function Form({ handleAddItems }) {
  // States
  const [input, setInput] = useState("");
  const [itemQty, setItemQty] = useState(1);

  // Helper functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const itemObject = {
      description: input,
      quantity: itemQty,
      id: Date.now(),
      packed: false,
    };
    handleAddItems(itemObject);
    setItemQty(1);
    setInput("");
  };

  // Component UI
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for 😊 your trip?</h3>
        <div>
          <select
            onClick={(e) => {
              setItemQty(e.target.value);
            }}
          >
            {Array.from({ length: 20 }, (_, idx) => idx + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Add</button>
        </div>
      </form>
    </>
  );
}

export default Form;

import React, { useState } from "react";

function PackingList({ items, handleDeleteItem, handlePacked, clearAllItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {items.length > 0
          ? sortedItems.map((item, idx) => {
              return (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    value={item.packed}
                    onClick={() => handlePacked(item.id)}
                  />
                  <span
                    style={
                      item.packed ? { textDecoration: "line-through" } : {}
                    }
                  >
                    {item.quantity} {item.description}
                  </span>
                  <button onClick={() => handleDeleteItem(item.id)}>❌</button>
                </li>
              );
            })
          : null}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by input packed status</option>
        </select>
        <button onClick={clearAllItems}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;

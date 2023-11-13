import { useState } from "react";
import Form from "./Components/Form";
import Stats from "./Components/Stats";
import PackingList from "./Components/PackingList";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems([...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearAllItems() {
    setItems([]);
  }
  return (
    <div className="app">
      <h1>🌴Far Away👜</h1>
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handlePacked={handlePacked}
        clearAllItems={clearAllItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

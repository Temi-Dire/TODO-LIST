import { useState } from "react";
import "../App.css";

function App() {
  const [item, setItem] = useState("");
  const [clicked, setClicked] = useState("");

  function itemValue(event) {
    setItem(event.target.value);
  }

  function addItem() {
    setClicked(item);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={itemValue} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{clicked}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

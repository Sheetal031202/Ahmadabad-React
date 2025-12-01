import './index.css'
import {  addDoc,  collection,  deleteDoc,  doc, getDocs, updateDoc,} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./config/firebase";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [editId, setEditId] = useState("");
  const [boolean, setBoolean] = useState(false);

  const database = collection(db, "BatmanData");

  async function handleAdd() {
    if (!inputText.trim()) {
      alert("enter your task first");
      return;
    }

    try {
      await addDoc(database, { todo: inputText });//return promoise
      alert("task added successfully ");
    } catch (error) {
      alert("message", error);
    }
    getData();
    setInputText("");
  }

  console.log(todoData);

  async function getData() {
    const data = await getDocs(database);
    console.log(data, "data");

    setTodoData(
      data.docs.map((doc) => ({ //[{id:2,todo:"react"}]
        id: doc.id,
        ...doc.data(),
      }))
    );
  }

  async function handleDelete(id) {
    let deleteData = doc(database, id);
    await deleteDoc(deleteData);
    alert("your data delete successfully");
    getData();
  }

  function handleEdit(data) {
    setInputText(data.todo);
    setBoolean(true);
    setEditId(data.id);
  }

  async function handleUpdate() {
    if (!inputText.trim()) {
      alert("you have field text first");
      return;
    }
    let updateData = doc(database, editId);
    await updateDoc(updateData, { todo: inputText });
    alert("updated successfully");
    setBoolean(false);
    setInputText("");
    getData();
  }

  useEffect(() => {
    getData();
  }, []);
return (
  <div className="todo-container">
    <h1>Todo List</h1>

    <div className="input-row">
      <input
        type="text"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      {boolean ? (
        <button className="update-btn" onClick={handleUpdate}>Update</button>
      ) : (
        <button className="add-btn" onClick={handleAdd}>Add</button>
      )}
    </div>

    <div>
      {todoData.length === 0 ? (
        <h2 className="empty">No tasks added</h2>
      ) : (
        todoData.map((item) => (
          <div className="todo-item" key={item.id}>
            <p className="todo-text">{item.todo}</p>

            <div className="action-buttons">
              <button className="edit-btn" onClick={() => handleEdit(item)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);


};

export default App;
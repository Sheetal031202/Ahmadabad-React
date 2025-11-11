import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/features/todoSlice";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const { todoData } = useSelector((state) => state.todolist);
  const [editIndex, seteditIndex] = useState("");
  const [boolean, setBoolean] = useState(false);
  const dispatch = useDispatch();
  function handleEdit() {
    
  }

  function handleAdd() {
    if (!inputText.trim()) {
      alert("first you have field task");
      return;
    }
    dispatch(addTask(inputText));

    setInputText("");
  }

  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        {todoData.map((element, index) => {
          return (
            <div key={index}>
              <p>{element}</p>
              <button
                onClick={() => {
                  dispatch(deleteTask(index));
                }}
              >
                Delete
              </button>
              <button onClick={handleEdit}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
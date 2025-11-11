import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoData: JSON.parse(localStorage.getItem("taskData")) || [],
};

export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todoData = [...state.todoData, action.payload];
      localStorage.setItem("taskData", JSON.stringify(state.todoData));
    },
    deleteTask: (state, action) => {
      state.todoData = state.todoData.filter(
        (element, i) => i != action.payload
      );
      localStorage.setItem("taskData", JSON.stringify(state.todoData));
    },
    updateTask: (state, action) => {
      state.todoData = state.todoData.map((element, i) =>
        i == action.payload.index ? action.payload.inputText : element
      );
      localStorage.setItem("taskData", JSON.stringify(state.todoData));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = todolistSlice.actions;

export default todolistSlice.reducer;
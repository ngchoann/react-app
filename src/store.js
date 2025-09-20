import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1. Tạo slice (state + reducer + actions)
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({id : Date.now(), text: action.payload});
    },
    removeTodo: (state, action)=>{
        return state.filter(todo => todo.id !== action.payload);
    }
  },
});

// 2. Export actions để component gọi
export const { addTodo, removeTodo } = todoSlice.actions;

// 3. Tạo store
const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export default store;
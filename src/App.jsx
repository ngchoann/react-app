// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./store";

function App() {
  const [task, setTask] = useState(""); // state cục bộ cho input
  const todos = useSelector((state) => state.todo); // lấy danh sách từ store
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch(addTodo(task)); // gửi action thêm task
      setTask(""); // reset input
    }
  };

  // Component -> gọi dispatch(gửi action đi) -> chạy reducer -> cập nhật state trong store -> component tự động re-render UI 

  return (
    <div style={{ margin: "30px auto", width: "400px" }}>
      <h1>Todo List 2</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder=""
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button style={{ background: "black", color: "white", borderRadius: 10, outline: "none" }} onClick={() => dispatch(removeTodo(todo.id))}> Xóa </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
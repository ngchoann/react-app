/*

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// props

function Yourname(props) {
  return <h3>Các mẫu xe mà {props.name} thích là {props.car_type[1]} và {props.car_type[2]}.
   Trong đó thì đặc biệt yêu thích chiếc {props.car_type[1]} H5, với chiếc này thì nó có các thông số là {props.interior.color}, {props.interior.length}, {props.interior.width}.</h3>;
} 

let car_type = ["Toyota","Hongqi","BYD"];
let interior = {color:"black", length:"5.5m",width:"4m"};

createRoot(document.getElementById('root')).render(

  <Yourname name="Ngoc Hoan" car_type={car_type} interior={interior} />
)


State
export default function App() {

  const [light, setlight] = useState("tắt");

  return (
    <div>
      <h2>Trạng thái đèn: {light}</h2>
      <button onClick={() => setlight("bật")}>Bật đèn</button>
      <button onClick={() => setlight("tắt")}>Tắt đèn</button>
    </div>
  )

}


//Ex state 2

export default function newForm() {
  const [name, setName] = useState("no name");

  return (
    <div>
      <h2>Tên của bạn là: {name}</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )

}
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store"; // import store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

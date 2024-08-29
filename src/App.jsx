import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import './components/Card'
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: 'krupa',
    age: 27
  }
  let myArr = [1,2,3];
  return (
    <>
      <h1 className="bg-yellow-400 text-black rounded-xl mb-4">Hello</h1>
      <Card username = "Krupa" btnText='Click Me' />
      <Card username='Patel'/>
    </>
  );
}

export default App;

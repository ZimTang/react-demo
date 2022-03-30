import { useState } from "react";
import "./App.css";

// function App() {
//   return <div className="App"></div>;
// }

const App = () => {
  const [msg, setMsg] = useState("curry");
  return (
    <div className="App">
      {msg}
      <button onClick={() => setMsg("james")}>changeName</button>
    </div>
  );
};

export default App;

/*
  1.函数式组件没有生命周期
  2.函数式组件没有this
  3.函数式组件没有state状态

  Hook
 */

import React from "react";
import counterStore from "./store/counter";
import { observer } from "mobx-react-lite";

function App() {
  return (
    <div>
      <h1>{counterStore.count}</h1>
      <button onClick={counterStore.addCount}>+</button>
    </div>
  );
}

export default observer(App);

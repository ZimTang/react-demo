import React from "react";
import counterStore from "./store/counter";
import listStore from "./store/list";
import { observer } from "mobx-react-lite";

function App() {
  return (
    <div>
      <h1>{counterStore.count}</h1>
      <button onClick={counterStore.addCount}>+</button>
      <h1>{listStore.filterList.join("-")}</h1>
      <button onClick={listStore.addList}>修改list</button>
    </div>
  );
}

export default observer(App);

import React from "react";
import useStore from "./store";
import { observer } from "mobx-react-lite";

function App() {
  const rootStore = useStore();
  return (
    <div>
      <h1>{rootStore.counterStore.count}</h1>
      <button onClick={rootStore.counterStore.addCount}>+</button>
      <h1>{rootStore.listStore.filterList.join("-")}</h1>
      <button onClick={rootStore.listStore.addList}>修改list</button>
    </div>
  );
}

export default observer(App);

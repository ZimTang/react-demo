// 组合子模块

import React from "react";
import CounterStore from "./counter.Store";
import ListStore from "./list.Store";

class RootStore {
  constructor() {
    // 对子模块进行实例化操作
    this.listStore = new ListStore();
    this.counterStore = new CounterStore();
  }
}

// 使用react-context机制，完成统一方法的封装
const rootStore = new RootStore();
const context = React.createContext(rootStore);
// 这个方法的作用：通过useContext拿到rootStore实例对象，然后返回
// 只要在业务组件中，调用useStore()就可以拿到rootStore
const useStore = () => React.useContext(context);

export default useStore;

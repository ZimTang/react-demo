import { makeAutoObservable } from "mobx";

class CounterStore {
  // 定义数据
  count = 0;
  constructor() {
    // 响应式处理
    makeAutoObservable(this);
  }
  // 定义action函数
  addCount = () => {
    this.count++;
  };
}

// 实例化
const counterStore = new CounterStore();

export default counterStore;
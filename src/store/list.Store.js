import { makeAutoObservable } from "mobx";

class ListStore {
  list = [1, 2, 3, 4, 5];
  constructor() {
    makeAutoObservable(this);
  }

  get filterList() {
    return this.list.filter((item) => item > 2);
  }

  addList = () => {
    this.list.push(6, 7, 8);
  };
}

export default ListStore;

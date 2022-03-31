// 初始化状态
const defaultState = {
  num: 1,
};

// 并导出一个函数
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "addNum":
      return { num: state.num + action.value };
    default:
      return state;
  }
};

export default reducer;

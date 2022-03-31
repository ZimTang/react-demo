import React from "react";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      <div>num:{props.num}</div>
      <button
        onClick={() => {
          props.add();
        }}
      >
        累加
      </button>
    </div>
  );
}

// 将reducer中的state映射成props，让开发者可以在组件中使用props的num去调用state中的num
const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

// dispatch映射：将reducer中的事件映射成props让开发者可以在组件中，使用props.add()去实现num的累加
const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      const action = { type: "addNum", value: 2 };
      dispatch(action);
    },
  };
};

// export default connect(state映射，dispatch映射)(当前组件名称);
export default connect(mapStateToProps, mapDispatchToProps)(App);

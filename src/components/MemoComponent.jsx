import React, { memo } from "react";

const MemoComponent = memo((props) => {
  // 父组件更新不会再次触发子组件更新
  console.log(123);
  return (
    <button
      onClick={() => {
        props.addNum();
      }}
    >
      累加
    </button>
  );
});

export default MemoComponent;

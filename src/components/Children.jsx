import React, { useContext } from "react";
import { styleContext } from "../App";

export default function Children(props) {
  const ctx = useContext(styleContext);
  // 第一种不使用useContext的写法
  // return (
  //   <styleContext.Consumer>
  //     {(style) => (
  //       <div style={style}>
  //         <h2>子组件-{props.num}</h2>
  //         <button onClick={() => props.changeNumFn(456)}>修改num</button>
  //       </div>
  //     )}
  //   </styleContext.Consumer>
  // );

  // 第二种：使用useContext的写法
  return (
    <div style={ctx}>
      <h2>子组件-{props.num}</h2>
      <button onClick={() => props.changeNumFn(456)}>修改num</button>
    </div>
  );
}

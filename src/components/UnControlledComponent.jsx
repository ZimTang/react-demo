import React, { useRef } from "react";

/* 
  受控组件和非受组件的区别
  受控组件和非受组件只存在于表单元素
  所谓的受控组件就是表元素的value需要通过state(或useState)来定义
  不受控组件意味着表单元素的value无法通过state获取，只能使用ref(或useRef)
*/

export default function UnControlledComponent() {
  const element = useRef(null);

  return (
    <div>
      <input type="text" ref={element} />
      <button onClick={() => console.log(element.current.value)}>
        获取input的值
      </button>
    </div>
  );
}

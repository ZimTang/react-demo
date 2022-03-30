import React, { useState } from "react";

/* 
  受控组件和非受组件的区别
  受控组件和非受组件只存在于表单元素
  所谓的受控组件就是表元素的value需要通过state(或useState)来定义
  不受控组件意味着表单元素的value无法通过state获取，只能使用ref(或useRef)
*/

export default function ControlledComponent() {
  const [value, setValue] = useState("");

  const inputChange = (val) => {
    setValue(val);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => inputChange(e.target.value)}
      />
      <button onClick={() => alert(value)}>获取input的值</button>
    </div>
  );
}

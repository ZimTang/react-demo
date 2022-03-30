import React from "react";

export default function UseMemoComponent(props) {
  return (
    <div>
      <button onClick={() => props.doSth()}>累加</button>
    </div>
  );
}

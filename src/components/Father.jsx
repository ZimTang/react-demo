import React from "react";
import Children from "./Children";

export default function Father(props) {
  return (
    <div>
      <Children num={props.num} changeNumFn={props.changeNumFn} />
    </div>
  );
}

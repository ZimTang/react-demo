import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  console.log(useLocation().state.username);
  return <div>Detail</div>;
}

import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate("/detail", {
      state: { username: "curry", age: 34 },
    });
  };
  return (
    <div>
      <ul>
        <li>
          <Link to="/home?id=1">首页</Link>
        </li>
        <li>
          <Link to="/list">列表</Link>
        </li>
        <li>
          <Link to="/detail">详情</Link>
        </li>
      </ul>
      <button onClick={goDetail}>跳转到详情页</button>
      <hr />
      <h3>App</h3>
      <Outlet />
    </div>
  );
}

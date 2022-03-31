import App from "../App";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
/* 
  react-router-dom 有两种模式：BrowserRouter 和 HashRouter
*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 定义一个路由
const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/list/:id" element={<List />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;

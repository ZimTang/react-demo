import {
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo,
} from "react";
import "./App.css";
import Father from "./components/Father";
import ControlledComponent from "./components/ControlledComponent";
import UnControlledComponent from "./components/UnControlledComponent";
import MemoComponent from "./components/MemoComponent";
import UseMemoComponent from "./components/UseMemoComponent";

// 创建上下文空间(Provider,Consumer)
export const styleContext = createContext();

// 第一种写法
// function App() {
//   return <div className="App"></div>;
// }

// 根组件
const App = () => {
  // useState
  const [msg, setMsg] = useState("curry");
  const changeNameClick = () => {
    setMsg("james");
  };

  // useEffect
  // 模拟mounted
  useEffect(() => {
    console.log("挂载完成");
  });

  // 检测数据更新
  // 当要检测的是所有变量，可以把所有变量都填写到数组中，也可以删除数组
  const [num, setNum] = useState(1);
  useEffect(() => {
    console.log("num改变了");
  }, [num]);

  // 模拟beforeDestroy：处理脏数据或者垃圾回收
  useEffect(() => {
    return () => {
      console.log("销毁");
    };
  });

  // 提供给子组件用来修改num的函数
  const changeNumFn = (arg) => {
    setNum(arg);
  };

  const addNum = useCallback(() => {
    /* 
      setNum(newValue) 使用新值强行覆盖初始值
      setNum((num) => num + 1) 不断使用新值覆盖旧值
    */
    setNum((num) => num + 1);
  }, []);

  const doSth = useMemo(() => {
    return () => setNum((num) => num + 1);
  }, []);

  return (
    <div className="App">
      {/* useEffect案例 */}
      {msg}
      <button onClick={() => changeNameClick()}>changeName</button>
      {num}
      <button onClick={() => setNum(num + 1)}>累加</button>
      <div>
        {/* 父子组件通信案例 */}
        {/* 父传子 子传父*/}
        <Father num={num} changeNumFn={changeNumFn} />
        {/* context案例 */}
        <styleContext.Provider value={{ color: "red" }}>
          <Father num={num} changeNumFn={changeNumFn} />
        </styleContext.Provider>
        {/* 受控组件案例 */}
        <ControlledComponent />
        {/* 非受控组件案例 */}
        <UnControlledComponent />
        {/* memo案例 */}
        <MemoComponent addNum={addNum} />
        {/* useMemo案例 */}
        <UseMemoComponent doSth={doSth} />
      </div>
    </div>
  );
};

export default App;

/*
  1.函数式组件没有生命周期
  2.函数式组件没有this
  3.函数式组件没有state状态

  Hook:
    useState
    useEffect
 */

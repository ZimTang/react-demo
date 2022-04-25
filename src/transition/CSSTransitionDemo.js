import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <CSSTransition
          in={isShow}
          timeout={400}
          classNames="card"
          unmountOnExit
          appear
          onEnter={(el) => console.log("开始进入")}
          onEntering={(el) => console.log("正在进入")}
          onEntered={(el) => console.log("进入完成")}
          onExit={(el) => console.log("开始退出")}
          onExiting={(el) => console.log("正在退出")}
          onExited={(el) => console.log("退出完成")}
        >
          <h2 className="">哈哈哈</h2>
        </CSSTransition>
        <button
          onClick={(e) => {
            this.setState({ isShow: !isShow });
          }}
        >
          切换
        </button>
      </div>
    );
  }
}

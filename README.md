<div align="center">
<h1>AwesomeScroll</h1>
</div>

## AwesomeScroll
滚动容器：
* 相较于setInterval思路实现循环滚动，requestAnimationFrame不会造成丢帧现象以及动画卡顿；
* requestAnimationFrame是由系统的时间间隔定义的。大多数浏览器的刷新频率是60Hz(每秒钟反复绘制60次)，
* 循环间隔是1000/60，约等于16.7ms。大多数浏览器会对反复挥着这个操作加以限制，不能超过60HZ，
* 即使人为设置超过了该值，效果也不会改善。requestAnimationFrame()保证了最佳的绘制效率
* 并且相较于setInterval或者setTimeout不会因为鼠标hover或者滚动而产生跳动画面，效果更流畅。

## Install
```sh
npm i awesome-scroll-container
```

## Usage
```tsx
import { AwesomeScroll } from "awesome-scroll-container";

function App() {
  const testList = [
    { id: 6, text: "为u人员玩儿" },
    { id: 7, text: "忙不忙时的办法就是干" },
    { id: 8, text: "切入哟i好看还是" },
    { id: 9, text: "使得咖啡机和" },
    { id: 10, text: "破iu气味" },
    { id: 11, text: "离开家啊饭后i为u人" },
    { id: 12, text: "迫切看达建粉红色" },
    { id: 13, text: "去无irywier" },
    { id: 14, text: "请问二婆i" },
    { id: 15, text: "迫切热u确认" },
    { id: 16, text: "妹子你先把v吃米线吧" },
    { id: 5, text: "阿四达建很干净啊" },
    { id: 4, text: "阿娇和发达国家" },
    { id: 3, text: "偶尔文文哦iu玩儿" },
    { id: 2, text: "阿克苏觉得惶恐" },
    { id: 1, text: "看见谁都会分开十多个i" },
  ];
  
  /**
   * 还可以设置的功能属性如下：
   */
  /** 滚动速度(通过控制每一次动画滚动的距离控制速度，所以实际上speed是一个滚动距离间隔上的控制) */
  // speed: number;
  /** 是否禁用自动循环滚动（默认开启不禁用） */
  // disabled: boolean;
  /**
   * 启用来回往复模式
   * @description 默认单向由上而下的滚动模式，滚到底部瞬间回到顶部再循环，该模式是滚动底部后再自下而上的往回滚动，自此循环往复
   */
  // reciprocatingMode: boolean;
  /** 滚动条宽度 */
  // scrollBarWidth: number;
  /** 滚动条颜色 */
  // scrollBarColor: string;
  
  // 最简单的使用
  return (
    <AwesomeScroll
      className="scrollContainerOuter"
      style={{ width: 100, height: 100 }}
    >
      {
        testList.map((item) => {
          return (
            <div key={item.id} className="rowItem"><span>{item.id}</span>{item.text}</div>
          );
        })
      }
    </AwesomeScroll>
  );
}
```
## License
[MIT License](https://github.com/lsbFlying/awesome-scroll-container/blob/master/LICENSE) (c) [刘善保](https://github.com/lsbFlying)

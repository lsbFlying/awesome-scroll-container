import * as React from "react";
import { Wrap } from "./styled";
import { SwitchBtn, Item } from './switch-btn';
import { AwesomeScroll } from "../../components";

type Props = {
  /** 数据??? */
};
interface State {
  /** 数据??? */
  count: number;
  /** 切换按钮数据 */
  dataList: Item[];
  /** 测试列表数据 */
  testList: {
    /** id值 */
    id: number,
    /** text文本 */
    text: string,
  }[];
  /** 循环滚动禁用 */
  scrollDisabled: boolean;
  /** 循环往复模式 */
  reciprocatingMode: boolean;
}

const testListTemp = [
  { id: 1, text: "看见谁都会分开十多个i" },
  { id: 2, text: "阿克苏觉得惶恐" },
  { id: 3, text: "偶尔文文哦iu玩儿" },
  { id: 4, text: "阿娇和发达国家" },
  { id: 5, text: "阿四达建很干净啊" },
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
];

/**
 * 类测试组件模板 TestClass
 * created by liushanbao
 * @author liushanbao
 * @class TestClass
 */
export default class TestClass extends React.PureComponent<Props, State> {
  static defaultProps = {};

  state: State = {
    count: 1,
    dataList: [
      {
        value: 0,
        label: "切换一",
      },
      {
        value: 1,
        label: "切换二",
      },
    ],
    testList: testListTemp,
    scrollDisabled: false,
    reciprocatingMode: false,
  };
  
  /** 切换按钮改变事件 */
  handleSwitchChange = (e: any, params: Item) => {
    // e.stopImmediatePropagation();
    e.stopPropagation();
    if (params.value === 1) {
      this.setState({
        testList: [
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
        ],
        // scrollDisabled: true,
        reciprocatingMode: true,
      });
    } else {
      this.setState({
        testList: testListTemp,
        scrollDisabled: false,
        reciprocatingMode: false,
      });
    }
  }

  render() {
    const { dataList, testList, scrollDisabled, reciprocatingMode } = this.state;
    return (
      <Wrap>
        <div className="switchBtnWrap">
          <SwitchBtn
            handleChange={this.handleSwitchChange}
            dataList={dataList}
            defaultValue={0}
          />
        </div>
        <AwesomeScroll
          reciprocatingMode={reciprocatingMode}
          className="scrollContainerOuter"
          disabled={scrollDisabled}
        >
          {
            testList.map((item) => {
              return (
                <div key={item.id} className="rowItem"><span>{item.id}</span>{item.text}</div>
              );
            })
          }
        </AwesomeScroll>
      </Wrap>
    );
  }
}

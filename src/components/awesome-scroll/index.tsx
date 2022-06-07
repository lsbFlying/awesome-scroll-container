import React from "react";
import { ICSS, AwesomeScrollProps } from "./interface";
import { ScrollWrap } from "./styled";

/**
 * @description 滚动容器
 * 相较于setInterval思路实现循环滚动，requestAnimationFrame不会造成丢帧现象以及动画卡顿；
 * requestAnimationFrame是由系统的时间间隔定义的。大多数浏览器的刷新频率是60Hz(每秒钟反复绘制60次)，
 * 循环间隔是1000/60，约等于16.7ms。大多数浏览器会对反复挥着这个操作加以限制，不能超过60HZ，
 * 即使人为设置超过了该值，效果也不会改善。requestAnimationFrame保证了最佳的绘制效率
 * 并且相较于setInterval或者setTimeout不会因为鼠标hover或者滚动而产生跳动画面，效果更流畅
 * created by liushanbao
 * @author: liushanbao
 * @date: 2020/05/12
 * @class AwesomeScroll
 * @implements ICSS
 */
export class AwesomeScroll extends React.PureComponent<AwesomeScrollProps> implements ICSS {

  static defaultProps = {
    speed: 0.5,
    disabled: false,
    reciprocatingMode: false,
    scrollBarWidth: 8,
    scrollBarColor: "#e8ebf0",
  };

  /** 动画frame返回id */
  private animateFrameId = 0;
  /**滚动缓存 */
  private cacheScrollTop = 0;
  /** 滚动容器ref */
  private awesomeScrollRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  /** 循环往复模式的滚动方向(1：正向自上而下，-1：负向自下而上) */
  private scrollDirection: number = 1;

  componentDidMount(): void {
    const { disabled } = this.props;
    if (!disabled) this.scroll();
  }

  componentDidUpdate(prevProps: Readonly<AwesomeScrollProps>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.disabled) {
      cancelAnimationFrame(this.animateFrameId);
    } else {
      cancelAnimationFrame(this.animateFrameId);
      this.handleMouseLeaver();
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animateFrameId);
  }

  /** 循环滚动 */
  scroll = () => {
    const { speed, reciprocatingMode } = this.props;
    if (!this.awesomeScrollRef) return null;
    const awesomeScrollWrapNode: Element | null = this.awesomeScrollRef.current;
    if (awesomeScrollWrapNode) {
      const isBottom = awesomeScrollWrapNode.scrollHeight <= awesomeScrollWrapNode.clientHeight + awesomeScrollWrapNode.scrollTop;
      const isTop = this.cacheScrollTop <= 0;
      // 常规模式
      if (!reciprocatingMode) {
        if (isBottom) {
          this.cacheScrollTop = 0;
          awesomeScrollWrapNode.scrollTop = 0;
        } else {
          this.cacheScrollTop += speed;
          awesomeScrollWrapNode.scrollTop = this.cacheScrollTop;
        }
      // 循环往复模式
      } else {
        // 正向自上而下
        if (this.scrollDirection === 1) {
          if (isBottom) {
            this.scrollDirection = -1;
          } else {
            this.cacheScrollTop += speed;
            awesomeScrollWrapNode.scrollTop = this.cacheScrollTop;
          }
        }
        // 负向自下而上
        if (this.scrollDirection === -1) {
          if (isTop) {
            this.scrollDirection = 1;
          } else {
            this.cacheScrollTop -= speed;
            awesomeScrollWrapNode.scrollTop = this.cacheScrollTop;
          }
        }
      }
    }
    // 循环递归自调用
    this.animateFrameId = requestAnimationFrame(this.scroll);
  }

  /** 鼠标进入 */
  handleMouseEnter = () => {
    cancelAnimationFrame(this.animateFrameId);
  }
  /** 鼠标离开 */
  handleMouseLeaver = () => {
    if (this.awesomeScrollRef && this.awesomeScrollRef.current) {
      this.cacheScrollTop = this.awesomeScrollRef.current.scrollTop;
    }
    this.scroll();
  }

  render() {
    const { className, style, disabled, scrollBarWidth, scrollBarColor, children } = this.props;
    return (
      <ScrollWrap
        ref={this.awesomeScrollRef}
        onMouseEnter={!disabled ? this.handleMouseEnter : undefined}
        onMouseLeave={!disabled ? this.handleMouseLeaver : undefined}
        style={style}
        className={className}
        scrollBarColor={scrollBarColor}
        scrollBarWidth={scrollBarWidth}
      >
        {children}
      </ScrollWrap>
    );
  }
}

export * from './interface'
export * from './styled';

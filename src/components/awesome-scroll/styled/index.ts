import styled from "styled-components";

export interface StyleProps {
	/** 滚动条宽度 */
	scrollBarWidth: number;
	/** 滚动条颜色 */
	scrollBarColor: string;
}
export const ScrollWrap = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  // 滚动条整体部分
  &::-webkit-scrollbar {
    width: ${p => `${p.scrollBarWidth}px`};
    background: transparent;
  }
  // 滚动条
  &::-webkit-scrollbar-thumb {
    border-radius: ${p => `${p.scrollBarWidth}px`};
    // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: ${p => p.scrollBarColor};
    //opacity: 0.25;
  }
  // 滚动条背景
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  // 滚动条两端的按钮小箭头
  &::-webkit-scrollbar-button {
    display: none;
  }

  // 适配IE
  scrollbar-face-color: ${p => p.scrollBarColor};
  scrollbar-base-color: rgba(255,255,255,0);
  // 滑动条边框的颜色
  scrollbar-shadow-color: ${p => p.scrollBarColor};
  // IE11下没效果
  scrollbar-3dlight-color: ${p => p.scrollBarColor};
  // scrollbar-dark-shadow-color: #f90;
  // 槽的颜色
  scrollbar-highlight-color: rgba(255,255,255,0);
  scrollbar-track-color: rgba(255,255,255,0);
  // 箭头的颜色
  scrollbar-arrow-color: ${p => p.scrollBarColor};
`;

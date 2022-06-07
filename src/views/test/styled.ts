// import styled, { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .switchBtnWrap {
    width: 150px;
    height: 20px;
  }

  .scrollContainerOuter {
    width: 150px;
    height: 150px;
    border: 1px solid #62ec0c;

    .rowItem {
      line-height: 25px;
      height: 25px;
      font-size: 12px;
      span {
        color: #ff8500;
      }
    }
  }
`;

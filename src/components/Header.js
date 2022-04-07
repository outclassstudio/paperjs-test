import styled from "styled-components";

export const HeaderMainDiv = styled.div`
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 1px 0px;
`;

export default function Header() {
  return <HeaderMainDiv>신나는 Paper.js 만들기</HeaderMainDiv>;
}

import styled from "styled-components";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const SubDiv = styled.div`
  display: flex;
  height: calc(100vh - 100px);
`;

export default function Main() {
  return (
    <MainDiv>
      <Header />
      <SubDiv>
        <Sidebar />
        <Body />
      </SubDiv>
    </MainDiv>
  );
}

import styled from "styled-components";
import Canvas from "./Canvas";

export const BodyMainDiv = styled.div`
  /* background-color: yellow; */
  width: calc(100vw - 100px);
  display: flex;
`;

export default function Body() {
  return (
    <BodyMainDiv>
      <Canvas />
    </BodyMainDiv>
  );
}

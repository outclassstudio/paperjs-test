import { useCallback, useEffect, useRef, useState } from "react";
import Paper from "paper";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import Logo from "../logo.svg";
import Cactus from "../cactus.svg";
import { dataSet } from "./data";
import { newData } from "./data3";
import { dataGroup } from "./data2";

export const CanvasDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .canvas {
    width: 100%;
    height: 100%;
  }

  .select {
  }

  img {
    width: 100px;
  }
`;

export default function Canvas({ children }) {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("black");

  const draw1 = useCallback(() => {
    let myPath;

    Paper.view.onMouseDown = (event) => {
      myPath = new Paper.Path();
      myPath.strokeColor = color;
      myPath.strokeWidth = 3;
    };

    Paper.view.onMouseDrag = (event) => {
      myPath.add(event.point);
    };

    Paper.view.draw();
  }, [color]);

  const handleExportSVG = (svg) => {
    console.log(svg);
    Paper.project.importSVG(svg);
    // console.log(Paper.project.exportJSON());
    // console.log(svg);
  };

  const handleColor = useCallback(
    (selectedColor) => {
      setColor(selectedColor);
    },
    [color]
  );
  // let svg = [];
  const importData = () => {
    Paper.project.importJSON(dataGroup);
  };

  const rotateSvg = () => {
    console.log(Paper.project);
    // svg.place(Paper.view.center);
    // Paper.project.rotate(45);
  };

  useEffect(() => {
    Paper.setup(canvasRef.current);
  }, []);

  useEffect(() => {
    console.log(Paper.project.exportJSON());
    draw1();
  }, [color, draw1]);

  return (
    <CanvasDiv>
      <SketchPicker
        color={color}
        onChange={(color) => handleColor(color.hex)}
        className="select"
        // height="170px"
        width="200px"
      />
      <button onClick={importData} />
      <button onClick={rotateSvg} />
      <img src={Logo} alt="" onClick={() => handleExportSVG(Logo)} />
      <img src={Cactus} alt="" onClick={() => handleExportSVG(Cactus)} />
      <canvas className="canvas" resize="true" ref={canvasRef}></canvas>
    </CanvasDiv>
  );
}

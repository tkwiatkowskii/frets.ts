import type { FretboardDimensionsProps } from "../../types/fretboard/FreatboardDimensionsProps";
import Frets from "./Frets";
import Strings from "./Strings";

export default function Fretboard({
  width, height } 
  : { width: number, height: number }) {

  const paddingX = 25;
  const paddingY = 15;

  const childrenDimensions : FretboardDimensionsProps = {
    startX: paddingX,
    startY: paddingY,
    endX: width - paddingX,
    endY: height - paddingY
  };
  
  return (
    <g style={{
    }}>
      <Strings {...childrenDimensions} />
      <Frets {...childrenDimensions} />
    </g>
  );
}
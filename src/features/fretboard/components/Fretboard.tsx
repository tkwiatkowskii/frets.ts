import type { FretboardDimensionsProps } from "../types/FreatboardDimensionsProps";
import Frets from "./Frets";
import Notes from "./Notes";
import Strings from "./Strings";

function Fretboard({
  width, height } 
  : { width: number, height: number }) {

  const paddingX = 30;
  const paddingY = 18;

  const childrenDimensions : FretboardDimensionsProps = {
    startX: paddingX,
    startY: paddingY,
    endX: width - paddingX,
    endY: height - paddingY
  };
  
  return (
    <g className="fretboard" style={{
    }}>
      <Strings {...childrenDimensions} />
      <Frets {...childrenDimensions} />
      <Notes {...childrenDimensions} />
    </g>
  );
}

export default Fretboard;
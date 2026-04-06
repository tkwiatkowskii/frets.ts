import type { FretboardDimensionsProps } from 
"../types/FreatboardDimensionsProps";
import calculateEqualTemperamentDistance from "../utils/calculateEqualTemperamentDistance";

function Frets(props: FretboardDimensionsProps) {
  const { startY, startX, endY, endX } = props;
  const scaleLength = endX - startX;

  const frets = Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;

    const equalTemperament = calculateEqualTemperamentDistance(n, startX, scaleLength);

    return (
      <line
        key={n}
        x1={equalTemperament}
        y1={startY}
        x2={equalTemperament}
        y2={endY}
        stroke="black" 
        strokeWidth="1"
      />
    )
  });

  const fretZero = (
    <line
      x1={startX}
      y1={startY-0.5}
      x2={startX}
      y2={endY+0.5}
      stroke="black" 
      strokeWidth="5"
    />
  )

  return (
    <g className="frets">
      {fretZero}
      {frets}
    </g>
  )
};

export default Frets;
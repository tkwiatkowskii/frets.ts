import type { FretboardDimensionsProps } from "../types/FreatboardDimensionsProps";

function Strings(props: FretboardDimensionsProps) {
  const { startX, startY, endX, endY } = props;
  const scale = (endY - startY) / 5;
  const strings = Array.from({ length: 6 }, (_, i) => {
    return (
      <line 
        key={i}
        x1={startX}
        y1={startY + scale * i}
        x2={endX}
        y2={startY + scale * i}
        stroke="black"
        strokeWidth="1.2"
      />
    )
  });
  return (
    <g className="strings">
      {strings}
    </g>
  );
};

export default Strings;
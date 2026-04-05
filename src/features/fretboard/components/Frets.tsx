import type { FretboardDimensionsProps } from 
"../types/FreatboardDimensionsProps";

export default function Frets(props: FretboardDimensionsProps) {
  const { startY, startX, endY, endX } = props;
  const scaleLength = endX - startX;

  const frets = Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;

    const raw = 1 - Math.pow(2, -n / 12);
    const lastRaw = 1 - Math.pow(2, -12 / 12);

    const equalTemperament = startX + (raw / lastRaw) * scaleLength;

    
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
      y1={startY}
      x2={startX}
      y2={endY}
      stroke="black" 
      strokeWidth="5`"
    />
  )

  return (
    <g>
      {fretZero}
      {frets}
    </g>
  )
};
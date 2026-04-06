type FrettedNoteProps = {
  x: number;
  y: number;
  label: string;
  isRoot: boolean;
};

function FrettedNote({ x, y, label, isRoot }: FrettedNoteProps) {
  return (
    <g className="frettedNote">
      <circle
        cx={x}
        cy={y}
        r={15}
        fill={isRoot ? "#fdd303" : "white"}
        stroke="black"
        strokeWidth="2"
      />
      <text
        x={x}
        y={y}
        dy="0.3em"
        textAnchor="middle"
        fontSize="13"
      >
        {label}
      </text>
    </g>
  );
}

export default FrettedNote;
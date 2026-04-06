type OpenNoteProps = {
  x: number;
  y: number;
  label: string;
  index?: number;
};

function OpenNote({ x, y, label, index }: OpenNoteProps) {
  return (
    <g className="openNote" key={index}>
      <circle
        cx={x}
        cy={y}
        r={15}
        fill="white"
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

export default OpenNote;
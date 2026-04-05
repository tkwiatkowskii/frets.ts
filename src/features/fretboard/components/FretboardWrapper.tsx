import Fretboard from "./Fretboard";

export default function FretboardWrapper() {
  const width = 1000;
  const height = 275;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{
      backgroundColor: '#ece6e696',
      width: '80%',
      margin: '0 auto',
    }}>
      <g>
        <Fretboard width={width} height={height} />
      </g>
    </svg>
  );
}
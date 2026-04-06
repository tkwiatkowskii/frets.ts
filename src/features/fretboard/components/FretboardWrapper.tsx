import FretboardSettingsWrapper from "../../fretboard-setttings/components/FretboardSettingsWrapper";
import Fretboard from "./Fretboard";

function FretboardWrapper() {
  const width = 1000;
  const height = 275;

  return (
    <div className="fretboard-wrapper flex gap-5 items-center justify-center w-screen">

      <svg className="fretboard-svg" viewBox={`0 0 ${width} ${height}`} style={{
        backgroundColor: '#ece6e696',
        width: '80%',
      }}>
        <Fretboard width={width} height={height} />
      </svg>
      <FretboardSettingsWrapper />
    </div>
  );
}

export default FretboardWrapper;
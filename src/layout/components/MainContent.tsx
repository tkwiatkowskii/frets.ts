import FretboardWrapper from "../../features/fretboard/components/FretboardWrapper";
import TuningContextProvider from "../../context/TuningContext";
import KeyContextProvider from "../../context/key/KeyContext";

function MainContent() {
  return (
    <main className="main-content w-screen h-screen flex justify-center items-center">
      <TuningContextProvider>
          <KeyContextProvider>
            <FretboardWrapper />
          </KeyContextProvider>
      </TuningContextProvider>
    </main>
  );
};

export default MainContent;
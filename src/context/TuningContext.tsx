import { createContext, useState, } from "react";
import type { Tuning } from "../types/Tuning";

export type TuningContextType = {
  tuning: Tuning;
  setTuning: (tuning: Tuning) => void;
};

export const TuningContext = createContext<TuningContextType | null>(null);

function TuningContextProvider({ children }: { children: React.ReactNode }) {
  const [tuning, setTuning] = useState<Tuning>([
    "E4",
    "B3",
    "G3",
    "D3",
    "A2",
    "E2",
  ]);

  return (
    <TuningContext.Provider value={{ tuning, setTuning }}>
      {children}
    </TuningContext.Provider>
  );
}

export default TuningContextProvider;
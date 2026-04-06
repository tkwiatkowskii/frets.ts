import { createContext, useReducer, } from "react";
import { keyReducer } from "./KeyReducer";
import type { KeyState } from "./KeyReducer";

export const KeyContext = createContext<KeyState | null>(null);
export const KeyDispatchContext = createContext<React.Dispatch<any> | null>(null);

const initialKeyState: KeyState = {
  rootNote: "E",
  mode: "minor",
};

function KeyContextProvider({ children }: { children: React.ReactNode }) {
  const [Key, KeyDispatch] = useReducer( keyReducer, initialKeyState )

  return (
    <KeyContext.Provider value={Key}>
      <KeyDispatchContext.Provider value={KeyDispatch}>
        {children}
      </KeyDispatchContext.Provider>
    </KeyContext.Provider>
  );
}

export default KeyContextProvider;
import type { Mode } from "../../types/Mode";
import type { AccidentalOrNatural, Note } from "../../types/Notes";
import addAccidental from "./util/addAccidental";
import getAccidental from "./util/getAccidental";

export type KeyState = {
  rootNote: Note;
  mode: Mode;
};

export type KeyAction =
  | { type: "SET_ROOT_NOTE"; rootNote: Note }
  | { type: "SET_MODE"; mode: Mode }
  | { type: "CHANGE_NOTE_BASE"; base: Note }
  | { type: "APPLY_ACCIDENTAL"; base: string; acc: AccidentalOrNatural };

export function keyReducer(state: KeyState, action: KeyAction): KeyState {
  switch (action.type) {
    case "SET_ROOT_NOTE":
      return { ...state, rootNote: action.rootNote };

    case "SET_MODE":
      return { ...state, mode: action.mode };

    case "APPLY_ACCIDENTAL": {
      const newrootNote = addAccidental(action.base, action.acc);
      return { ...state, rootNote: newrootNote };
    }

    case "CHANGE_NOTE_BASE": {
      const acc = getAccidental(state.rootNote);
      const base = action.base;

      const newrootNote: Note =
        acc === "natural"
          ? base
          : ((base + acc) as Note);

      return { ...state, rootNote: newrootNote };
    }

    default:
      return state;
  }
}
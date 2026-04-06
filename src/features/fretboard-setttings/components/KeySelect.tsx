import { useContext } from "react";
import type { AccidentalOrNatural, Note } from "../../../types/Notes";
import { KeyContext, KeyDispatchContext } from "../../../context/key/KeyContext";
import strip from "../util/strip";
import getAccidental from "../../../context/key/util/getAccidental";

function KeySelect() {
  const keyContext = useContext(KeyContext)!;
  const { rootNote, mode } = keyContext;

  const keyDispatch = useContext(KeyDispatchContext)!;

  const base = strip(rootNote) as Note;

  function handleChangeRootNote(newBase: Note) {
    const acc: AccidentalOrNatural = getAccidental(rootNote); 

    keyDispatch({ type: "CHANGE_NOTE_BASE", base: newBase, acc, mode});
  }

  return (
    <select value={base} onChange={
      (e) => handleChangeRootNote(e.target.value as Note)}>
      {["C", "D", "E", "F", "G", "A", "B"].map((n) => (
        <option key={n} value={n}>
          {n}
        </option>
      ))}
    </select>
  );
}

export default KeySelect;
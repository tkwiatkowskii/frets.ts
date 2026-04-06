import { useContext } from "react";
import { KeyContext } from "../../../context/key/KeyContext";
import type { AccidentalOrNatural, Note } from "../../../types/Notes";
import strip from "../util/strip";
import { KeyDispatchContext } from "../../../context/key/KeyContext";
import getAccidental from "../../../context/key/util/getAccidental";

function AccidentalSelect() {
  const keyContext = useContext(KeyContext)!;
  const { rootNote, } = keyContext;
  
  const keyDispatch = useContext(KeyDispatchContext)!;

  const base = strip(rootNote) as Note;

  const currentAcc: AccidentalOrNatural = getAccidental(rootNote);

  function handleChangeAccidental(acc: AccidentalOrNatural) {
    keyDispatch({ type: "APPLY_ACCIDENTAL", base, acc });
  }

  return (
    <select
      value={currentAcc}
      onChange={(e) => handleChangeAccidental(e.target.value as AccidentalOrNatural)}
    >
      <option value="natural">natural</option>
      <option value="#">#</option>
      <option value="b">b</option>
    </select>
  );
}

export default AccidentalSelect;
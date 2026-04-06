import type { AccidentalOrNatural, Note } from "../../../types/Notes";

function addAccidental(base: string, acc: AccidentalOrNatural): Note {
  if (acc === "natural") return base as Note;
  return (base + acc) as Note;
}

export default addAccidental;
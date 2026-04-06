import type { AccidentalOrNatural, Note } from "../../../types/Notes";

function getAccidental(note: Note): AccidentalOrNatural {
  if (note.includes("#")) return "#";
  if (note.includes("b")) return "b";
  return "natural";
}

export default getAccidental;
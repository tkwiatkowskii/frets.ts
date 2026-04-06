import type { Note } from "../../../types/Notes";
import type { AccidentalQuality } from "../../../types/Keys";

export default function getChromaticNotes(accidental: AccidentalQuality): Note[] {
  const sharp: Note[] = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
  const flat: Note[] = ["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"];

  return accidental === "sharp" || accidental === "natural"
    ? sharp
    : flat;
}